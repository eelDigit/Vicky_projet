import express from "express";
import { addQuestion, deleteQuestion, editQuestion, getOneQuestion, getQuestions, getQuestionsByUser } from "../controllers/questionsController.js";


const questionsRouter = express.Router();

questionsRouter.get("/questions", getQuestions)
questionsRouter.get("/questions/:id", getOneQuestion )

questionsRouter.get("/questions/my-question/:userId", getQuestionsByUser);

questionsRouter.post("/questions/new", addQuestion)

questionsRouter.put('/questions/update/:id/:userId', editQuestion)


questionsRouter.delete("/questions/delete/:id", deleteQuestion )


export default questionsRouter;