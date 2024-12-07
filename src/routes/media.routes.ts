import { Router } from "express";
import path from "path";

const mediaRouter = Router();

//  Image File
mediaRouter.get("/img", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.jpg");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      
      if (!res.headersSent) {
        res.status(500).json({ error: "Error serving image file" });
      }
    }
  });
});


mediaRouter.get("/img/download", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.jpg");

  res.download(filePath, "tt.jpg", (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading image file" });
      }
    }
  });
});

//  Audio File
mediaRouter.get("/audio", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.mp3");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error serving audio file" });
      }
    }
  });
});


mediaRouter.get("/audio/download", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.mp3");

  res.download(filePath, "tt.mp3", (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading audio file" });
      }
    }
  });
});

//  Video File
mediaRouter.get("/video", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.mp4");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error serving video file" });
      }
    }
  });
});


mediaRouter.get("/video/download", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.mp4");

  res.download(filePath, "tt.mp4", (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading video file" });
      }
    }
  });
});

export { mediaRouter };
