const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const register=async(req,res)=>{
    const {email,password}=req.body;

    try{
        const existUser=await user.findOne({email});
        if(existuser){
            return res.status(400).json({
                succes:true,
                data
            });

        }
        const hashPassword=await bcrypt.hash(password,10);

        const user= await user.create({
            email,
            password:hashedPassword
        });
        return res.status(201).json({
            succes:true,
                data
        });

    }
    catch(error){
        res.status(500).json({
           succes:true,
                data
        });
}
};

const login=async(req,res)=>{
    const{email,password}=req.body;

    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
               succes:true,
                data
            });

        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                succes:true,
                data
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
        res.status(500).json({succes:true,
                data});
    }
}
module.exports={register,login};