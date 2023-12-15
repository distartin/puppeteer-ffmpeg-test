// video.js
const { spawn } = require('child_process');
const path = require('path');
const config = require('./config');
const ffmpegPath = require('ffmpeg-static');

function createVideo() {
  const inputImage = path.join(config.screenshotsFolder, 'screenshot.png');
  const outputVideo = config.videoOutputPath;

  const ffmpegProcess = spawn(ffmpegPath, [
    '-framerate', '1/5',  // 1 frame every 5 seconds
    '-i', inputImage,
    '-c:v', 'libx264',
    '-r', '30',           // Output video frame rate
    '-pix_fmt', 'yuv420p',
    outputVideo,
  ]);

  ffmpegProcess.on('close', (code) => {
    if (code === 0) {
      console.log('Video created successfully!');
    } else {
      console.error(`Error creating video. Process exited with code ${code}`);
    }
  });
}

module.exports = {
  createVideo,
};