import HomeBtn from "../HomePage/HomeBtn"
import ProgBar from 'react-bootstrap/ProgressBar'
import { useEffect } from "react"
import QuizData from "./QuizData"

const ProgressBar = ({ scores, avgScore, updateAvgScore, totalQuestions }) => {

  useEffect(() => {
    updateAvgScore()
  }, [])

  let percentCorrect = 100 * avgScore / totalQuestions

  return (
    <div>
      <h3 className="results-header normal-header">Progress</h3>
      <div className="progressBar">
        <h2 className="avg-score">Average Score: {scores.length > 0 ? avgScore.toFixed(2) : 0}/{totalQuestions}</h2>

        <ProgBar variant="custom" style={{height: "30px", fontSize: "25px", borderRadius: "25px"}} animated striped now={percentCorrect} />

        {scores.map((score, index) => 
          <QuizData key={index} score={score} index={index} />
        )}

      </div>
      <HomeBtn css="btn-home"/>
    </div>
  )
}

export default ProgressBar