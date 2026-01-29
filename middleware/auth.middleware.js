const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    const authHeader=req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.staus(401).json({
            message:"Unauthorized"
        });
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }
    catch(err){
        res.status(401).json({
            message:"Invalid Token"
        });
    }
}