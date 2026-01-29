const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const register=async(req,res)=>{
    const {email,password}=req.body;

    try{
        const existUser=await user.findOne({email});
        if(existuser){
            return res.status(400).json({
                message:"User already exists"
            });

        }
        const hashPassword=await bcrypt.hash(password,10);

        const user= await user.create({
            email,
            password:hashedPassword
        });
        return res.status(201).json({
            message:"User registered successfully"
        });

    }
    catch(error){
        res.status(500).json({
            messaage:"Server Error"
        });
}
};

const login=async(req,res)=>{
    const{email,password}=req.body;

    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                mesage:"Invalid Credentials"
            });

        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                message:"Incorrect Password"
            });
        }

        const token=jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );
        res.json({token});
    }
    catch(error){
        res.status(500).json({message:"Server Error"});
    }
}
module.exports={register,login};