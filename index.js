// index.js
const express = require('express');
const screenshotModule = require('./screenshot');
const videoModule = require('./video');
const { exec } = require('child_process');

const app = express();
// Serve static files (videos and images) from the 'public' folder
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.get('/generate-video', async (req, res) => {
  try {
    await screenshotModule.captureScreenshot();
    videoModule.createVideo();
    res.status(200).json({ message: 'Video generation initiated successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/check-ffmpeg', (req, res) => {
  // Run the 'ffmpeg' command with the '-version' option to check if it's installed
  exec('ffmpeg -version', (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ message: 'ffmpeg is not installed or an error occurred.' });
    } else {
      res.status(200).json({ message: 'ffmpeg is installed.', versionInfo: stdout });
    }
  });
});

// Serve the video file
app.get('/video', (req, res) => {
  res.sendFile(__dirname + '/public/output.mp4');
});

// Serve the screenshot/image file
app.get('/image', (req, res) => {
  res.sendFile(__dirname + '/public/screenshots/screenshot.png');
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "It's working." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
