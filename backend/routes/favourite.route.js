import express from "express";
import { addFavourite, getFavourites, removeFavourite } from "../controllers/favourite.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const favRouter = express.Router();

favRouter.post("/:id",authMiddleware,addFavourite);
favRouter.get("/",authMiddleware,getFavourites);
favRouter.delete("/:id",authMiddleware,removeFavourite);



export default favRouter;


