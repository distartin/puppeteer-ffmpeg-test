// config.js
const path = require('path');

module.exports = {
  screenshotsFolder: path.join(__dirname, 'public', 'screenshots'), // Updated path for screenshots
  videoOutputPath: path.join(__dirname, 'public', 'output.mp4'), // Updated path for video output
  apiPort: process.env.PORT || 3000,
};
