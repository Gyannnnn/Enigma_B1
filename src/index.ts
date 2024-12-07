import express from "express"
const app = express();
import { filesRouter } from "./routes/files.routes";
import { mediaRouter } from "./routes/media.routes";

app.get("/",(req,res)=>{
    res.json({
        message:"Hello World"
    })
});


app.use("/files",filesRouter);
app.use("/media",mediaRouter);


app.listen(3000,()=>{
    console.log("Server Is Running ...")
})