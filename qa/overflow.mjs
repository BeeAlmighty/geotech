// Finds elements wider than the viewport (the cause of horizontal scroll).
// Run prod first:  npm run build && npx next start -p 3100
// Then:            node qa/overflow.mjs
import puppeteer from "puppeteer";

const BASE = process.env.BASE || "http://localhost:3100";
const ROUTES = (process.env.ROUTES || "/,/work,/products/recur").split(",");
const WIDTHS = [320, 360, 390];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  ...(process.env.CHROME ? { executablePath: process.env.CHROME } : {}),
});

for (const route of ROUTES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 800 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 45000 });

    const report = await page.evaluate((vw) => {
      const docW = document.documentElement.scrollWidth;
      const offenders = [];
      if (docW > vw) {
        for (const el of document.querySelectorAll("*")) {
          const r = el.getBoundingClientRect();
          // element pokes past the right edge or starts left of 0
          if (r.right > vw + 1 || r.left < -1) {
            offenders.push({
              tag: el.tagName.toLowerCase(),
              cls: (el.className && el.className.baseVal !== undefined
                ? el.className.baseVal
                : String(el.className || "")).slice(0, 70),
              left: Math.round(r.left),
              right: Math.round(r.right),
              w: Math.round(r.width),
            });
          }
        }
      }
      return { docW, offenders };
    }, width);

    const tag = `${route}  @${width}`;
    if (report.docW > width) {
      console.log(`\n✗ ${tag}  doc=${report.docW}px (overflow ${report.docW - width}px)`);
      // show the widest / left-most few, de-duped by class
      const seen = new Set();
      for (const o of report.offenders) {
        const key = o.tag + o.cls;
        if (seen.has(key)) continue;
        seen.add(key);
        console.log(`    <${o.tag}> [${o.cls}]  left=${o.left} right=${o.right} w=${o.w}`);
      }
    } else {
      console.log(`✓ ${tag}  doc=${report.docW}px — no horizontal overflow`);
    }
    await page.close();
  }
}

await browser.close();
