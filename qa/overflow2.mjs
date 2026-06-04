// Stress-test horizontal overflow: NORMAL motion, scroll the page through (fires
// Framer reveals), and open the mobile menu — capturing the worst scrollWidth.
import puppeteer from "puppeteer";

const BASE = process.env.BASE || "http://localhost:3100";
const ROUTES = (process.env.ROUTES || "/,/work,/products/recur").split(",");
const WIDTHS = [320, 360, 390];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  ...(process.env.CHROME ? { executablePath: process.env.CHROME } : {}),
});

async function worstOverflow(page, vw) {
  return page.evaluate((vw) => {
    const docW = document.documentElement.scrollWidth;
    const offenders = [];
    if (docW > vw) {
      for (const el of document.querySelectorAll("*")) {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1 || r.left < -1) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: String(el.className?.baseVal ?? el.className ?? "").slice(0, 70),
            left: Math.round(r.left),
            right: Math.round(r.right),
          });
        }
      }
    }
    return { docW, offenders };
  }, vw);
}

for (const route of ROUTES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 800 });
    // NORMAL motion (default) — do NOT emulate reduced motion
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 45000 });

    // scroll through to fire reveals, recording the worst overflow seen
    let worst = { docW: width, offenders: [] };
    await page.evaluate(() => (document.documentElement.style.scrollBehavior = "auto"));
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y <= h; y += Math.round(800 * 0.6)) {
      await page.evaluate((y) => scrollTo(0, y), y);
      await sleep(120);
      const r = await worstOverflow(page, width);
      if (r.docW > worst.docW) worst = r;
    }
    await page.evaluate(() => scrollTo(0, 0));

    // open the mobile menu (only present < md) and re-check
    const menuBtn = await page.$('button[aria-label="Open menu"]');
    if (menuBtn) {
      await menuBtn.click();
      await sleep(400);
      const r = await worstOverflow(page, width);
      if (r.docW > worst.docW) worst = { ...r, menu: true };
    }

    const tag = `${route}  @${width}`;
    if (worst.docW > width) {
      console.log(`\n✗ ${tag}  doc=${worst.docW}px (overflow ${worst.docW - width}px)${worst.menu ? " [menu open]" : ""}`);
      const seen = new Set();
      for (const o of worst.offenders) {
        const key = o.tag + o.cls;
        if (seen.has(key)) continue;
        seen.add(key);
        console.log(`    <${o.tag}> [${o.cls}]  left=${o.left} right=${o.right}`);
      }
    } else {
      console.log(`✓ ${tag}  doc=${worst.docW}px — clean`);
    }
    await page.close();
  }
}

await browser.close();
