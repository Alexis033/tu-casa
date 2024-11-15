import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

app.use("/api/posts", postRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});