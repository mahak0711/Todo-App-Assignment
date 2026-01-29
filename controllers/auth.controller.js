const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ email, password: hashPassword });

        // Optionally generate token on registration
        const token = jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(201).json({
            message: "User registered successfully",
            user: { id: newUser._id, email: newUser.email },
            token
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const login=async(req,res)=>{
    const{email,password}=req.body;

    try{
        const user = await User.findOne({ email }).select("+password");

        if(!user){
            return res.status(400).json({
                message:"Invalid Credentials"
            });

        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                message:"Invalid Credentials"
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
        res.status(500).json({
            message:error.message
        });
    }
}
module.exports={register,login};