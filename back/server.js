import express from "express" //import avec les ESModule
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import cors from 'cors';
import User from "./models/userModel.js";
import userRouter from "./routes/userRouter.js";
import questionsRouter from "./routes/questionsRouter.js";



const app = express ();
//Pour récupérer le req.body //POST

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
dotenv.config();

connectDB();


app.use(userRouter);
app.use(questionsRouter);
app.listen(process.env.PORT, () => {

    console.log(`Le serveur est exécuté à : ${process.env.BASE_URL}`)
})