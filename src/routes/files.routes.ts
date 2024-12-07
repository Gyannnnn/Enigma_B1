import { Router } from "express";
import path from "path";

const filesRouter = Router();

//  Text File
filesRouter.get("/text", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.txt");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error serving text file" });
      }
    }
  });
});

filesRouter.get("/text/download", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.txt");

  res.download(filePath, "tt.txt", (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading text file" });
      }
    }
  });
});

//HTML File
filesRouter.get("/html", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.html");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error serving HTML file" });
      }
    }
  });
});

filesRouter.get("/html/download", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.html");

  res.download(filePath, "tt.html", (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading HTML file" });
      }
    }
  });
});

// PDF File
filesRouter.get("/pdf", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.pdf");

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error serving PDF file" });
      }
    }
  });
});

filesRouter.get("/pdf/download", (req, res) => {
  const filePath = path.join(__dirname, "../public/tt.pdf");

  res.download(filePath, "tt.pdf", (err) => {
    if (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading PDF file" });
      }
    }
  });
});

export { filesRouter };
