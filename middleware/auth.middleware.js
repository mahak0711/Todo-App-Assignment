const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    const authHeader=req.headers.authorization?.split(' ')[1];
    if(!authHeader){
        return res.staus(401).json({
            message:"Unauthorized"
        });
    }
    try{
        const decoded=jwt.verify(authHeader,process.env.JWT_SECRET);
        req.userId=decoded.user.id;
        next();
    }
    catch(err){
        res.status(401).json({
            message:"Invalid Token"
        });
    }
}