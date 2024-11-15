import express from "express"

const router = express.Router()

router.post("/test", (req,res)=>{
    console.log("Router works!");
    res.send("Router works!")
})
router.post("/login", (req,res)=>{
    console.log("Router works!");
    res.send("Router works!")
})
router.post("/logout", (req,res)=>{
    console.log("Router works!");
    res.send("Router works!")
})


export default router