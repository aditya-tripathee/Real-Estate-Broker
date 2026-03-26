import cookieParser from "cookie-parser";
import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT;


// middlewares
app.use(express.json());
app.use(cookieParser());


// routes 
app.get("/",(req,res)=>{
    res.send("Home Page ")
})



// server 
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
  connectDB();
});
