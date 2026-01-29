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
        message:"Failed to create board"
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
            message:"Failed to fetch boards"
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
            message:"Board not found"
        });
    }
    await board.deleteOne();
    res.json({
        message:"Board deleted successfully"
    });
}
catch(err){
    res.status(500).json({
        message:"Failed to delete board"
    });
}
};
module.exports={createBoard,getBoards,deleteBoard};

