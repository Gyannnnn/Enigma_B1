"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaRouter = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const mediaRouter = (0, express_1.Router)();
exports.mediaRouter = mediaRouter;
//  Image File
mediaRouter.get("/img", (req, res) => {
    const filePath = path_1.default.join(__dirname, "../public/tt.jpg");
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
    const filePath = path_1.default.join(__dirname, "../public/tt.jpg");
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
    const filePath = path_1.default.join(__dirname, "../public/tt.mp3");
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
    const filePath = path_1.default.join(__dirname, "../public/tt.mp3");
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
    const filePath = path_1.default.join(__dirname, "../public/tt.mp4");
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
    const filePath = path_1.default.join(__dirname, "../public/tt.mp4");
    res.download(filePath, "tt.mp4", (err) => {
        if (err) {
            console.error(err);
            if (!res.headersSent) {
                res.status(500).json({ error: "Error downloading video file" });
            }
        }
    });
});
//# sourceMappingURL=media.routes.js.map