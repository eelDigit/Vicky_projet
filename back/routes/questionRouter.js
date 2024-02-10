import express from "express";
import { addQuestion } from "../controllers/questionController.js";


const questionRouter = express.Router();

questionRouter.post("/questions/new", addQuestion)

export default questionRouter;