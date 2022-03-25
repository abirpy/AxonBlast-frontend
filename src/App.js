import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Question from './components/Question'
import Results from './components/Results';

import GamesBtn from './components/GamesBtn';
import Links from './components/Links';
import FlashCardsBtn from './components/FlashCardsBtn';
import FlashCards from './components/FlashCards';
import HomePage from './components/HomePage';
import Header from './components/Header';


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

        <Routes>

          <Route path='/' exact element={
            <>

              <QuizButton totalQuestions={totalQuestions} questionNum={1} text={"Take Quiz"}/>
              <GamesBtn text={"Games"}/>
              <FlashCardsBtn text={"Flash Cards"}/>
              <Header />
              <HomePage totalQuestions={totalQuestions} />
            </>
          } />

          {questions.map((question) => (
            <Route key='question.id' path={`/q${question.id}`} element={<Question totalQuestions={totalQuestions} question={question} addAnswer={addAnswer} />} />
          ))}

          <Route path='/results' element={<Results answers={answers} />} />
          <Route path='/games' element={<Links/>}/>
          <Route path='/Flashcards' element={<FlashCards variant={'Primary'}/>}/>
          

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