const Board=require('../models/Board');

const createBoard=async(req,res)=>{
try{
    const board=await Board.create({
        title:req.body.title,
        user:req.userId
    });
    res.status(201).json(board);
}
catch(err){
    res.status(500).json({
        succes:true,
                data
    });
}
}

const getBoards=async(req,res)=>{
    try{
        const boards=await Board.find({user:req.userId});
        res.json(boards);
    }
    catch(err){
        res.status(500).json({
            succes:true,
                data
        })
    }
}

const deleteBoard=async(req,res)=>{
    try{
        const board=await Board.findOne({
            _id:req.params.id,
            user:req.userId
    });
    if(!board){
        return res.status(404).json({
            succes:true,
                data
        });
    }
    await board.deleteOne();
    res.json({
        succes:true,
                data
    });
}
catch(err){
    res.status(500).json({
        succes:true,
                data
    });
}
};
module.exports={createBoard,getBoards,deleteBoard};

