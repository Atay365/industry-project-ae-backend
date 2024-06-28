import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import quizRoute from "./routes/quiz.js";
// import pyRouter from "./routes/pymodel.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5050;
const { FRONT_END } = process.env;

app.use(cors({ origin: FRONT_END }));

app.use(express.json());

app.use("/fraud-quiz", quizRoute);
// app.use("/model", pyRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
  console.log("Allowed front end url:", FRONT_END);
});
