// One-off: capture the Egora landing hero at 4:3 to match the other work shots.
// Run from the geotech-solutions root:  node qa/shot-egora.mjs
import puppeteer from "puppeteer";

const URL = process.env.SHOT_URL || "https://egora.geotech.agency";
const OUT = process.env.SHOT_OUT || "public/work/egora.jpg";

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  executablePath:
    process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe",
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 960, deviceScaleFactor: 1 });
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1400)); // let fonts/hero settle
await page.screenshot({
  path: OUT,
  type: "jpeg",
  quality: 82,
  clip: { x: 0, y: 0, width: 1280, height: 960 },
});
await browser.close();
console.log("wrote", OUT);
