import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import prisma from "../lib/prisma.js"

export const register= async(req, res)=>{
    const {username, email, password} = req.body

    try{   
        const hashedPassword = await bcrypt.hash(password, 12)
        console.log(hashedPassword)
        
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            },
        })
        console.log(newUser)

        res.status(201).json({message: "User created"})
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Failed to create user"})
    }
        
}
export const login= async(req, res)=>{
    const {username, password} = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })
        if(!user){
            return res.status(401).json({message: "Invalid credentials"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(401).json({message: "Invalid credentials"})
        }
        // traditional way of setting cookies:
        // res.setHeader("Set-Cookie", "test=" + "myValue").json({message: "User logged in"})
        const age= 1000*60*60*24*7
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY, {expiresIn: age})
        // modern way of setting cookies:
        res.cookie("token", token,{
            httpOnly: true,
            // secure: true // only works on https,
            maxAge: age
        })
        .status(200)
        .json({message: "User logged in"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to login"})
    }

}
export const logout= (req, res)=>{
    res.clearCookie("token")
    .status(200)
    .json({message: "User logged out"})

}