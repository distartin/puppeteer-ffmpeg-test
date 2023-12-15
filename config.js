// config.js
const path = require('path');

module.exports = {
  screenshotsFolder: path.join(__dirname, 'screenshots'),
  videoOutputPath: path.join(__dirname, 'output.mp4'),
  apiPort: process.env.PORT || 3000,
};
