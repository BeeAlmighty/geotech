// Loads each route in a clean Chrome (no extensions) and reports console errors
// — used to tell a real hydration bug from an extension-induced one.
import puppeteer from "puppeteer";
const BASE = process.env.BASE || "http://localhost:3100";
const ROUTES = (process.env.ROUTES || "/,/work,/products/recur-pro,/products/slotly").split(",");
const b = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  ...(process.env.CHROME ? { executablePath: process.env.CHROME } : {}),
});
let total = 0;
for (const route of ROUTES) {
  const p = await b.newPage();
  const msgs = [];
  p.on("console", (m) => m.type() === "error" && msgs.push("console: " + m.text()));
  p.on("pageerror", (e) => msgs.push("pageerror: " + e.message));
  const resp = await p.goto(BASE + route, { waitUntil: "networkidle0", timeout: 45000 });
  await new Promise((r) => setTimeout(r, 500));
  const status = resp?.status() ?? 0;
  if (status >= 400) msgs.push("HTTP " + status);
  total += msgs.length;
  console.log(`${msgs.length ? "✗" : "✓"} ${route} (HTTP ${status})${msgs.length ? "\n    " + msgs.join("\n    ") : ""}`);
  await p.close();
}
console.log(total ? `\n${total} issue(s)` : "\nno console/hydration errors in a clean browser");
await b.close();
