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
        <h2 className="avg-score">Average Score</h2>

        <ProgBar style={{height: "30px", fontSize: "25px", borderRadius: "25px"}} animated striped now={percentCorrect} label={`${avgScore.toFixed(2)}/${totalQuestions}`} variant="info" />

        {scores.map((score, index) => 
          <QuizData score={score} index={index} />
        )}

      </div>
      <HomeBtn css="btn-home"/>
    </div>
  )
}

export default ProgressBar