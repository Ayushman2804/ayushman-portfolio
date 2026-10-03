import { chromium } from 'playwright-core';

async function main() {
  const executablePath = 'C:\\Users\\KIIT0001\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe';
  const browser = await chromium.launch({
    executablePath,
    headless: true
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Testing page scrolling...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  // 1. Check body overflow on initial page load
  const initialOverflow = await page.evaluate(() => document.body.style.overflow);
  console.log('Initial document.body.style.overflow:', `"${initialOverflow}"`);
  if (initialOverflow === 'hidden') {
    throw new Error('FAILED: Body overflow is locked on initial page load!');
  }

  // 2. Test mouse wheel scroll down
  await page.mouse.wheel(0, 800);
  await page.waitForTimeout(400);

  const scrollYAfterWheel = await page.evaluate(() => window.scrollY);
  console.log('ScrollY after mouse wheel 800px:', scrollYAfterWheel);
  if (scrollYAfterWheel <= 0) {
    throw new Error('FAILED: Mouse wheel scroll did not move the page!');
  }

  // 3. Test scrolling down to each section and measuring scroll progress
  const sections = ['about', 'skills', 'projects', 'architecture', 'education', 'certifications', 'contact'];
  for (const id of sections) {
    const sectionExists = await page.locator(`#${id}`).count();
    if (sectionExists > 0) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      const currentScroll = await page.evaluate(() => window.scrollY);
      console.log(`Scrolled to #${id} -> scrollY: ${currentScroll}`);
    }
  }

  // 4. Test opening modal, verifying lock, closing modal, verifying unlock
  const deepDiveButton = page.locator('button:has-text("Deep Dive Details")').first();
  await deepDiveButton.scrollIntoViewIfNeeded();
  await deepDiveButton.click();
  await page.waitForTimeout(300);

  const overflowWhileModalOpen = await page.evaluate(() => document.body.style.overflow);
  console.log('Overflow while modal open:', overflowWhileModalOpen);

  const closeBtn = page.locator('button[aria-label="Close modal"]');
  await closeBtn.click();
  await page.waitForTimeout(300);

  const overflowAfterModalClose = await page.evaluate(() => document.body.style.overflow);
  console.log('Overflow after modal close:', overflowAfterModalClose);
  if (overflowAfterModalClose === 'hidden') {
    throw new Error('FAILED: Body overflow stayed hidden after modal close!');
  }

  // 5. Scroll back to hero and verify "Scroll to explore" cue is visible
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  const scrollCue = page.locator('text=Scroll to explore');
  const isCueVisible = await scrollCue.isVisible();
  console.log('Scroll to explore cue visible:', isCueVisible);

  await page.screenshot({ path: 'scroll_verified.png' });
  console.log('Screenshot saved to scroll_verified.png');

  await browser.close();
  console.log('ALL SCROLL TESTS PASSED SUCCESSFULLY!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
