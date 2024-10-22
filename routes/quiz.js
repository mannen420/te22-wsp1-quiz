import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz"
    })
})

const questions = [
  {
    id: "q1",
    text: "Hur många hjul har en bil?",
    answers: [3, 12, 5, 4],
    correctAnswer: 4
  },
  {
    id: "q2",
    text: "Hur många ben har en gnu?",
    answers: ["två", "sju", "tre", "fyra"],
    correctAnswer: "fyra",
    
  },
  {
    id: "q3",
    text: "vilken färg är röd",
    answers: ["blå", "grön", "röd", "fyrkant"],
    correctAnswer: "röd",
  },
  {
    id: "q4",
    text: "01110110 01101001 01101100 01101011 01100101 01101110 00100000 01100010 01101111 01101011 01110011 01110100 01100001 01110110 00100000 11000011 10100100 01110010 00100000 01000101",
    answers: ["01101001", "01101100", "01101011", "01000101"],
    correctAnswer: "01000101",
  }

]

router.get("/questions", (req, res) => {
  res.render("questions.njk", {
    message: "Frågor",
    questions
  })
})

router.post("/end", (req, res) => {
  const answers = req.body
  console.log(answers)
  const result = questions.map(question => {
    const answer = answers[question.id]
    return {
      question: question.text,
      answer,
      correct: answer == question.correctAnswer
    }
  })
  // questions.forEach(question => {
  //   const answer = answers[question.id]
  //   if (answer == question.correctAnswer) {
  //     console.log("Du har svarat rätt på fråga : ", question.id)
  //   }
  // })
  res.render("result.njk", {
    message: "Ditt resultat",
    result
  })
})
// rad 4 , 18, 19 i server.js

export default router

// kom ihåg i server.js
// import quizRouter from './routes/quiz.js'
// app.use("/quiz", quizRouter)