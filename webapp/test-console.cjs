const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') console.log(`BROWSER ERROR: ${msg.text()}`);
  });
  
  page.on('pageerror', exception => {
    console.log(`UNCAUGHT EXCEPTION: ${exception}`);
  });

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(4000);
  
  const text = await page.evaluate(() => document.body.innerText);
  console.log("PAGE TEXT:");
  console.log(text.substring(0, 500));
  
  await browser.close();
})();
