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

import Jollie from './components/Pictures/AngelinaJollie.jpg';
import Brad from './components/Pictures/BradPitt.jpeg';
import Emilia from './components/Pictures/EmiliaClarke.jpeg';
import Emma from './components/Pictures/EmmaWatson.jpg';
import Keanu from './components/Pictures/KeanuReaves.webp';

function App() {

  //perform get request using axios library to local machine
  const [data, setData] = useState([]);
  
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const [score, setScore] = useState(-1);

  const [scores, setScores] = useState([]);

  const [quizFinish, setQuizFinish] = useState(false);

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
  }, [quizFinish]);

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


  const [avgScore, setAvgScore] = useState(0)

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

  const addScore = () => {
    if (score !== -1) {
      setScores([...scores, score])
      setScore(-1)
    }
  }

  const updateAvgScore = () => {
    let scoreSum = 0
    scores.forEach((score) => {
      scoreSum += score
    })
    let newAvgScore = scoreSum / (scores.length)
    setAvgScore(newAvgScore)
  }

 const flashCards = [
    {
      id: 1,
      text: Jollie,
      ans: "Angelina Jollie"
    },

    {
      id : 2,
      text: Brad,
      ans: "Brad Pitt"
    },
    {
      id: 3,
      text: Emilia,
      ans: "Emilia Clarke"
    },
    {
      id: 4,
      text: Keanu,
      ans: "Keanu Reaves"
    },
    {
      id: 5,
      text: Emma,
      ans: "Emma Watson"
    }
  ]

  const [flashcard, setFlashcard] = useState(
      {
        id: 1,
        text: Brad,
        ans: "Brad Pitt"
      }
  )

  const [color, setColor] = useState("warning")
  const [cardText, setCardText] = useState(flashcard.text)

  const handleNext = (id) => {
    console.log(id)
    let newFlashCard;
    flashCards.forEach((f) => {
      if(f.id === id){
        newFlashCard = f;
      }
    });
    setFlashcard(newFlashCard);
    setColor("warning")
    setCardText(flashcard.text)
  }

  const flipCard = () => {
    if (cardText !== flashcard.ans) {
      setCardText(flashcard.ans)
      setColor("danger")
    } else {
      setCardText(flashcard.text)
      setColor("warning")
    }
  }

  const changeCardState = () => {
    setCardText(flashcard.text)
    setColor("warning")
  }

  const updateQuizFinish = () => {
    setQuizFinish(!quizFinish)
  }
  console.log(quizFinish)

  return (
    <Router>
      <div className="container">
        <Routes>

          <Route path='/' exact element={
            <>
              <Header />
              <HomeBtns updateQuizFinish={updateQuizFinish} totalQuestions={questions.length} />
            </>
          } />

          {questions.map((question) => (
            <Route key='question.id' path={`/q${question.id}`} element={<Question totalQuestions={questions.length} question={question} addAnswer={addAnswer} />} />
          ))}

          <Route path='/results' element={<Results answers={answers} updateScore={updateScore} score={score} addScore={addScore} scores={scores} />} />
          <Route path='/tasks' element={<Links/>}/>
          <Route path='/Flashcards' element={<FlashCards flashcard={flashcard} handleNext={handleNext} changeCardState = {changeCardState} cardText={cardText} color={color} flipCard={flipCard} />}/>
          <Route path='/progress' element={<ProgressBar scores={scores} avgScore={avgScore} updateAvgScore={updateAvgScore} totalQuestions={questions.length} />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/profile' element={<Profile />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App