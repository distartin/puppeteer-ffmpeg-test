// screenshot.js
const puppeteer = require('puppeteer');
const config = require('./config');
const path = require('path');

async function captureScreenshot() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
  });

  const page = await browser.newPage();

  try {
    await page.goto('https://example.com');
    await page.screenshot({ path: path.join(config.screenshotsFolder, 'screenshot.png') });
    console.log('Screenshot captured successfully!');
  } catch (error) {
    console.error('Failed to capture screenshot:', error);
  } finally {
    await browser.close();
  }
}

module.exports = {
  captureScreenshot,
};
