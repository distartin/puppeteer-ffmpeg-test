// index.js
const express = require('express');
const screenshotModule = require('./screenshot');
const videoModule = require('./video');

const app = express();
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
