const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ 
    headless: true,
    executablePath: '/Users/reus/Library/Caches/ms-playwright/chromium-1200/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  
  // Index page
  console.log('Checking index page...');
  await page.goto('https://htmlpreview.github.io/?https://gist.githubusercontent.com/reus-jeon/cc8c23373a89396869fff9943294231d/raw/index.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/Users/reus/.openclaw-designclaw/workspace/preview/screenshots/01-index.png', fullPage: true });
  console.log('✅ Index screenshot saved');
  
  // Account Linking page
  console.log('Checking account-linking page...');
  await page.goto('https://htmlpreview.github.io/?https://gist.githubusercontent.com/reus-jeon/cc8c23373a89396869fff9943294231d/raw/account-linking.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/Users/reus/.openclaw-designclaw/workspace/preview/screenshots/02-account-linking.png', fullPage: true });
  console.log('✅ Account linking screenshot saved');
  
  // Click "연동 시작하기" button
  await page.click('text=연동 시작하기');
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/reus/.openclaw-designclaw/workspace/preview/screenshots/03-token-modal.png', fullPage: true });
  console.log('✅ Token modal screenshot saved');
  
  // Point Exchange page
  console.log('Checking point-exchange page...');
  await page.goto('https://htmlpreview.github.io/?https://gist.githubusercontent.com/reus-jeon/cc8c23373a89396869fff9943294231d/raw/point-exchange.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/Users/reus/.openclaw-designclaw/workspace/preview/screenshots/04-point-exchange.png', fullPage: true });
  console.log('✅ Point exchange screenshot saved');
  
  // Select service
  await page.click('#service-play-land');
  await page.waitForTimeout(300);
  
  // Fill amount
  await page.fill('#amountInput', '5000');
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/Users/reus/.openclaw-designclaw/workspace/preview/screenshots/05-exchange-filled.png', fullPage: true });
  console.log('✅ Filled form screenshot saved');
  
  // Click exchange button to show modal
  await page.click('#exchangeBtn');
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/reus/.openclaw-designclaw/workspace/preview/screenshots/06-confirm-modal.png', fullPage: true });
  console.log('✅ Confirm modal screenshot saved');
  
  // Exchange History page
  console.log('Checking exchange-history page...');
  await page.goto('https://htmlpreview.github.io/?https://gist.githubusercontent.com/reus-jeon/cc8c23373a89396869fff9943294231d/raw/exchange-history.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/Users/reus/.openclaw-designclaw/workspace/preview/screenshots/07-history.png', fullPage: true });
  console.log('✅ History screenshot saved');
  
  await browser.close();
  console.log('\n🎉 All screenshots saved to workspace/preview/screenshots/');
})();
