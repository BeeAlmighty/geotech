import puppeteer from "puppeteer";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import fs from "node:fs";

const url = process.argv[2] || "http://localhost:3210/";
const formFactor = process.argv[3] || "mobile"; // "mobile" | "desktop"

const browser = await puppeteer.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH ||
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
  args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
});
const port = Number(new URL(browser.wsEndpoint()).port);

const flags = {
  port,
  output: "json",
  logLevel: "error",
  onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
};

const config = formFactor === "desktop" ? desktopConfig : undefined;

const runnerResult = await lighthouse(url, flags, config);
const lhr = runnerResult.lhr;

const out = {};
for (const k of ["performance", "accessibility", "best-practices", "seo"]) {
  out[k] = Math.round((lhr.categories[k].score ?? 0) * 100);
}
const audits = lhr.audits;
const m = {
  FCP: audits["first-contentful-paint"]?.displayValue,
  LCP: audits["largest-contentful-paint"]?.displayValue,
  TBT: audits["total-blocking-time"]?.displayValue,
  CLS: audits["cumulative-layout-shift"]?.displayValue,
  SI: audits["speed-index"]?.displayValue,
};

console.log(JSON.stringify({ formFactor, scores: out, metrics: m }, null, 2));
fs.writeFileSync(
  `qa/lh-${formFactor}.json`,
  JSON.stringify(lhr, null, 2),
);

// Surface top failing/diagnostic opportunities
const opps = Object.values(audits)
  .filter((a) => a.details?.type === "opportunity" && (a.numericValue ?? 0) > 0)
  .sort((a, b) => (b.numericValue ?? 0) - (a.numericValue ?? 0))
  .slice(0, 8)
  .map((a) => `${a.title}: ${a.displayValue ?? ""}`);
if (opps.length) console.log("Opportunities:\n  " + opps.join("\n  "));

await browser.close();
