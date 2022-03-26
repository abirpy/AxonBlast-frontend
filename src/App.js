import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Question from './components/Question'
import Results from './components/Results';

import Links from './components/Games/Links';
import FlashCards from './components/Flashcards/FlashCards';
import HomePage from './components/HomePage';
import Header from './components/Header';
import ProgressBtn from './components/ProgressBtn';


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

 const flashCards = [
    {
      id: 1,
      text: "My Son's name is Jason"
    },
    {
      id : 2,
      text: "Joe Biden is the current president of America"
    },
    {
      id: 3,
      text: "I am from Los Angeles"
    }
  ]

  const [flashcard, setFlashcard] = useState(
      {
        id: 1,
        text: 'One'
      }
  )

  const handleChange = (id) => {
    let newFlashCard;
    flashCards.forEach((f) => {
      if(f.id === id){
        newFlashCard = f;
      }
    });
    setFlashcard(newFlashCard);
  }

  return (
    <Router>
      <div className="container">
        <Routes>

          <Route path='/' exact element={
            <>
              <Header />
              <HomePage totalQuestions={totalQuestions} />
            </>
          } />

          {questions.map((question) => (
            <Route key='question.id' path={`/q${question.id}`} element={<Question totalQuestions={totalQuestions} question={question} addAnswer={addAnswer} />} />
          ))}

          <Route path='/results' element={<Results answers={answers} />} />
          <Route path='/games' element={<Links/>}/>
          <Route path='/Flashcards' element={<FlashCards text = {flashcard.text} variant='Primary' handleChange={handleChange}/>}/>
          <Route path='/Flashcards' element={<FlashCards variant={'Primary'}/>}/>
          <Route path='/progress' element={<ProgressBtn />}/>


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