import { chromium } from 'playwright-core';
import path from 'path';

async function main() {
  const executablePath = 'C:\\Users\\KIIT0001\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe';
  const browser = await chromium.launch({
    executablePath,
    headless: true
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });

  page.on('pageerror', err => {
    console.error('Page error detected:', err);
  });

  console.log('Navigating to http://localhost:5173/...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log('Page Title:', title);

  // Take Desktop Screenshot
  await page.screenshot({ path: 'desktop_preview.png', fullPage: false });
  console.log('Desktop preview captured.');

  // Test Project Modal interaction
  const deepDiveButton = page.locator('button:has-text("Deep Dive Details")').first();
  if (await deepDiveButton.isVisible()) {
    console.log('Clicking Deep Dive Details...');
    await deepDiveButton.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'modal_preview.png' });
    console.log('Modal preview captured.');
    
    // Close modal
    const closeBtn = page.locator('button[aria-label="Close modal"]');
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(300);
    }
  }

  // Mobile Viewport Test
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'mobile_preview.png', fullPage: false });
  console.log('Mobile preview captured.');

  await browser.close();

  console.log('Total console messages:', consoleMessages.length);
  const errors = consoleMessages.filter(m => m.type === 'error');
  if (errors.length > 0) {
    console.error('Console errors:', errors);
  } else {
    console.log('Zero console errors detected! Verification PASSED.');
  }
}

main().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
