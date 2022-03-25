import './App.css';
import logo from './ab_logo.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Question from './components/Question'
import QuizButton from './components/QuizButton'
import Results from './components/Results';

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

  const totalQuestions = questions.length

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

  const addAnswer = (id, ans) => {
    setAnswers(
      answers.map((answer) => 
        answer.id === id ? { ...answer, input: ans } : answer
      )
    )
  }

  return (
    <Router>
      <div className="container">

        <header className="header rounded-corners">
          <img src={logo} />
        </header>

        <Routes>

          <Route path='/' exact element={
            <QuizButton totalQuestions={totalQuestions} questionNum={1} text={"Take Quiz"} />
          } />

          {questions.map((question) => (
            <Route key='question.id' path={`/q${question.id}`} element={<Question totalQuestions={totalQuestions} question={question} addAnswer={addAnswer} />} />
          ))}

          <Route path='/results' element={<Results answers={answers} />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;


/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/