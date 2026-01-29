const express=require("express");
const cors=require("cors");
require("dotenv").config();

const connectDB=require("./config/db");

const authRoute=require("./routes/auth.routes");
const boardRoute=require("./routes/board.routes");
const todoRoute=require("./routes/todo.routes");

const app=express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("api/auth",authRoute);
app.use("api/board",boardRoute);
// app.use("api/todo",todoRoute);

app.get("/",(req,res)=>{
    res.send("API is running");
});

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})