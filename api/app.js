import express from "express";

const app = express();

app.use("/api/test", (req,res)=>{
    res.send("It works!");
})
app.use("/api/auth/register", (req,res)=>{
    res.send("It works!");
})
app.use("/api/auth/login", (req,res)=>{
    res.send("It works!");
})
app.use("/api/auth/logout", (req,res)=>{
    res.send("It works!");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});