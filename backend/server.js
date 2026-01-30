require("dotenv").config();
const express=require("express");
const cors=require("cors");


const connectDB=require("./src/config/db");

const authRoute=require("./src/routes/auth.routes");
const boardRoute=require("./src/routes/board.routes");
const todoRoute=require("./src/routes/todo.routes");

const app=express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/board",boardRoute);
app.use("/api/todo",todoRoute);

app.get("/",(req,res)=>{
    res.send("API is running");
});

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})