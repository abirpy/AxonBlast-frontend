import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

import Question from './components/QuizPage/Question'
import Results from './components/ResultsPage/Results';
import Links from './components/Games/Links';
import FlashCards from './components/Flashcards/FlashCards';
import HomeBtns from './components/HomePage/HomeBtns';
import Header from './components/HomePage/Header';
import ProgressBar from './components/ProgressPage/ProgressBar';
import Settings from './components/SettingsPage/Settings';
import Profile from './components/ProfilePage/Profile';

function App() {

  //perform get request using axios library to local machine
  const [data, setData] = useState([]);
  
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const baseURL = "http://localhost:3000/random";
  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setData(response.data);

        var ques = []
        var ans = []

        for(let i=1; i<=response.data.length; i++) {
          ques.push( {
            'id': i,
            'text': response.data[i-1][0]
          } )
          ans.push( {
            'id': i,
            'key': response.data[i-1][1],
            'input': ""
          } )
        }
        setQuestions(ques);
        setAnswers(ans);
      })
      .catch(error => {
        return;
      });
  }, []);

  console.log(questions)
  // const [questions, setQuestions] = useState([
  //   {
  //     "id": 1,
  //     "text": "Who was the first president of the United States?"
  //   },
  //   {
  //     "id": 2,
  //     "text": "How many syllables are in the word \"it\"?"
  //   },
  //   {
  //     "id": 3,
  //     "text": "What is the name for the American Unit of currency?"
  //   }
  // ])

  // const [answers, setAnswers] = useState([
  //   {
  //     "id": 1,
  //     "key": "George Washington",
  //     "input": ""
  //   },
  //   {
  //     "id": 2,
  //     "key": "1",
  //     "input": ""
  //   },
  //   {
  //     "id": 3,
  //     "key": "dollar",
  //     "input": ""
  //   }
  // ])

  const [score, setScore] = useState(0);

  const addAnswer = (id, ans) => {
    setAnswers(
      answers.map((answer) => 
        answer.id === id ? { ...answer, input: ans } : answer
      )
    )
  }

  const updateScore = () => {
    let newScore = 0
    answers.forEach((answer) => {
      if (answer.key === answer.input) {
          newScore++
      }
    })
    setScore(newScore)
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
              <HomeBtns totalQuestions={questions.length} />
            </>
          } />

          {questions.map((question) => (
            <Route key='question.id' path={`/q${question.id}`} element={<Question totalQuestions={questions.length} question={question} addAnswer={addAnswer} />} />
          ))}

          <Route path='/results' element={<Results answers={answers} updateScore={updateScore} score={score} />} />
          <Route path='/games' element={<Links/>}/>
          <Route path='/Flashcards' element={<FlashCards text = {flashcard.text} handleChange={handleChange}/>}/>
          <Route path='/progress' element={<ProgressBar score={score} totalQuestions={questions.length} />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/profile' element={<Profile />}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App