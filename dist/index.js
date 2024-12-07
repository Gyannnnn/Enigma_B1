"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const files_routes_1 = require("./routes/files.routes");
const media_routes_1 = require("./routes/media.routes");
app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});
app.use("/files", files_routes_1.filesRouter);
app.use("/media", media_routes_1.mediaRouter);
app.listen(3000, () => {
    console.log("Server Is Running ...");
});
//# sourceMappingURL=index.js.map