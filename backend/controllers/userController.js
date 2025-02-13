import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login
const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            res.json({success:false,message:"User Doesn't Exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Can't Login"})
        
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        if(!validator.isEmail(email)){
            return res.json({ success: false, message: "Invalid email" });
        }
        if(password.length < 8){
            return res.json({ success: false, message: "Password is not strong enough" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({ 
            name:name,
            email:email,
            password:hashedPassword
         });
         const user = await newUser.save();
         const token = createToken(user._id);
         res.json({ success: true, message: "User created successfully", token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Could not create user" });
        
    }
}
export { loginUser, registerUser };                             