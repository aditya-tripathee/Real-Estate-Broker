import cookieParser from "cookie-parser";
import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import propertyRouter from "./routes/property.route.js";
dotenv.config();
import "./config/cloudinary.js";
import favRouter from "./routes/favourite.route.js";


const app = express();
const PORT = process.env.PORT;


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));




// // routes 
// app.get("/",(req,res)=>{
//     res.send("Home Page ")
// })

// router 
app.use("/api/auth/",authRouter);
app.use("/api/property",propertyRouter);
app.use("/api/fav",favRouter);



// server 
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
  connectDB();
});
