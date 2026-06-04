import puppeteer from "puppeteer";
const BASE = process.env.BASE || "http://localhost:3100";
const ROUTES = ["/", "/work", "/products/recur", "/products/slotly", "/privacy", "/terms"];
const WIDTHS = [280, 320, 360, 375, 390, 412, 414, 430, 480, 540, 600, 700, 768, 820, 900, 1000, 1024];
const b = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  ...(process.env.CHROME ? { executablePath: process.env.CHROME } : {}),
});
let bad = 0;
for (const route of ROUTES) {
  for (const w of WIDTHS) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 800 });
    await p.goto(BASE + route, { waitUntil: "networkidle0", timeout: 45000 });
    const r = await p.evaluate((vw) => {
      const dw = document.documentElement.scrollWidth;
      const off = [];
      if (dw > vw) {
        for (const el of document.querySelectorAll("*")) {
          const bb = el.getBoundingClientRect();
          if (bb.right > vw + 1 || bb.left < -1) {
            off.push(el.tagName.toLowerCase() + "." + String(el.className?.baseVal ?? el.className ?? "").split(" ").slice(0, 3).join("."));
          }
        }
      }
      return { dw, off: [...new Set(off)].slice(0, 6) };
    }, w);
    if (r.dw > w) {
      bad++;
      console.log(`✗ ${route} @${w} doc=${r.dw} (+${r.dw - w})  ${r.off.join("  ")}`);
    }
    await p.close();
  }
}
if (!bad) console.log("ALL CLEAN across all widths/routes");
await b.close();
