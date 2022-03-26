import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Question from './components/QuizPage/Question'
import Results from './components/ResultsPage/Results';

import Links from './components/Links';
import FlashCards from './components/FlashCards';
import HomeBtns from './components/HomePage/HomeBtns';
import Header from './components/HomePage/Header';
import ProgressBtn from './components/ProgressPage/ProgressBtn';


function App() {
  const [questions, setQuestions] = useState([
    {
      "id": 1,
      "text": "Who was the first president of the United States?"
    },
    {
      "id": 2,
      "text": "How many syllables are in the word \"it\"?"
    },
    {
      "id": 3,
      "text": "What is the name for the American Unit of currency?"
    }
  ])

  const [answers, setAnswers] = useState([
    {
      "id": 1,
      "key": "George Washington",
      "input": ""
    },
    {
      "id": 2,
      "key": "1",
      "input": ""
    },
    {
      "id": 3,
      "key": "dollar",
      "input": ""
    }
  ])

  const [score, setScore] = useState(0);

  const addAnswer = (id, ans) => {
    setAnswers(
      answers.map((answer) => 
        answer.id === id ? { ...answer, input: ans } : answer
      )
    )
  }

  // const updateScore = (id) => {
  //   answers.forEach((answer) => {
  //     console.log(answer.key === answer.input)
  //     if (answer.id === id && answer.key === answer.input) {
  //         setScore(score+1)
  //     }
  //   })
  //   console.log(score)
  // }

  const updateScore = () => {
    let newScore = 0
    answers.forEach((answer) => {
      console.log(answer.key === answer.input)
      if (answer.key === answer.input) {
          newScore++
      }
    })
    setScore(newScore)
  }

  return (
    <Router>
      <div className="container">
        <Routes>

          <Route path='/' exact element={
            <>
              <Header />
              <HomeBtns totalQuestions={questions.length} />
            </>
          } />

          {questions.map((question) => (
            <Route key='question.id' path={`/q${question.id}`} element={<Question totalQuestions={questions.length} question={question} addAnswer={addAnswer} />} />
          ))}

          <Route path='/results' element={<Results answers={answers} updateScore={updateScore} score={score} />} />
          <Route path='/games' element={<Links/>}/>
          <Route path='/Flashcards' element={<FlashCards variant={'Primary'}/>}/>
          <Route path='/progress' element={<ProgressBtn />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;