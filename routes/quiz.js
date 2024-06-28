import express, { Router } from "express";
import fs from "fs";

const router = express.Router();

// Function to Read Quiz data
const readQuizDate = () => {
  try {
    const quizData = fs.readFileSync("./data/quiz.json");
    return JSON.parse(quizData);
  } catch (error) {
    console.log("Error reading from file", error);
  }
};

router.get("/", (_req, res) => {
  try {
    const quizConent = fs.readFileSync("./data/quiz.json");
    const quiz = JSON.parse(quizConent);
    res.status(200).json(quiz);
  } catch (error) {
    console.log("Error: Bad Request", error);
  }
});

export default router;
