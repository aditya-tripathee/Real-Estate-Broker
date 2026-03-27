import express from "express";
import { createProperty, deleteProperty, getAllProperties, getPropertyById } from "../controllers/property.controller.js";
import { isSeller } from "../middlewares/isSeller.middleware.js";
import { upload } from "../config/cloudinary.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const propertyRouter = express.Router();

propertyRouter.get("/get",getAllProperties);
propertyRouter.post("/create",authMiddleware,isSeller, upload.array("images",5),createProperty);
propertyRouter.get("/get/:id",getPropertyById);
propertyRouter.delete("/delete",authMiddleware,isSeller,deleteProperty);



export default propertyRouter;
