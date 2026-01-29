const Todo=require ("../models/Todo");

export const createTodo=async(req,res)=>{
    const {title}=req.body;
    const todo=new Todo.create({title});
    res.status(201).json(todo);
};

export const getTodos=async(req,res)=>{
    const todos=await Todo.find().sort({createdAt:-1});
    res.json(todos);
}

export const updateTodo=async(req,res)=>{
    const {id}=req.params;
    const todo=await Todo.findByIdAndUpdate(
        id,req.body,
        {new:true}
    );
    res.json(todo);
};

export const deleteTodo=async(req,res)=>{
    const {id}=req.params;
    await Todo.findByIdAndDelete(id);
    res.json({message:"Todo deleted successfully"});
};