const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(6000);
  const text = await page.evaluate(() => document.body.innerText);
  console.log("PAGE TEXT AFTER 6 SECS:");
  console.log(text.substring(0, 500));
  await browser.close();
})();
