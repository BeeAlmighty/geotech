import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3100";
mkdirSync("qa/shots", { recursive: true });
const ROUTES = [["/", "home"], ["/work", "work"], ["/products/recur", "recur"]];
const VIEWPORTS = [
  { name: "360", width: 360, height: 780 },
  { name: "414", width: 414, height: 896 },
  { name: "768", width: 768, height: 1024 },
];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  ...(process.env.CHROME ? { executablePath: process.env.CHROME } : {}),
});

for (const [route, slug] of ROUTES) {
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 45000 });
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      const step = Math.round(innerHeight * 0.7);
      for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
        scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      scrollTo(0, 0);
    });
    await sleep(350);
    await page.screenshot({ path: `qa/shots/${slug}-${vp.name}.png`, fullPage: true });
    await page.close();
  }
}
await browser.close();
console.log("shots written to qa/shots");
