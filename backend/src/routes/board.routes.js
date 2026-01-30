const express=require("express");
const router=express.Router();

const auth=require("../middleware/auth.middleware");

const{createBoard,
    getBoards,
    deleteBoard}=require("../controllers/board.controller");

    router.use(auth);
    router.post("/",createBoard);
    router.get("/",getBoards);
    router.delete("/:id",deleteBoard);

    module.exports=router;