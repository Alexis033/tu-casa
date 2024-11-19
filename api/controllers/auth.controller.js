import bcrypt from "bcrypt"
export const register= async(req, res)=>{
    const {name, email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 12)
    console.log(hashedPassword)
    // res.send(req.body)
}
export const login= (req, res)=>{
    // db operations

}
export const logout= (req, res)=>{
    // db operations

}