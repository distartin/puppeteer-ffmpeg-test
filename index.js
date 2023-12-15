// index.js
const screenshotModule = require('./screenshot');
const videoModule = require('./video');

async function run() {
  await screenshotModule.captureScreenshot();
  videoModule.createVideo();
}

run();
