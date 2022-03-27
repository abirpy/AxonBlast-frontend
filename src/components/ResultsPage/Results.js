import HomeBtn from "../HomePage/HomeBtn"
import Result from "./Result"
import { useEffect } from "react"

const Results = ({ answers, updateScore, score, addScore, scores }) => {

  useEffect(() => {
    updateScore()
  }, [])

  useEffect(() => {
    addScore()
  }, [score])

  return (
    <div className='results-entire'>
      <h3 className="results-header">Results</h3>

      <div className="results-ki">
        {answers.map((answer) => 
          <Result key={answer.id} answer={answer} />
        )}
      </div>

      <h2 className="score">Score: {scores[scores.length-1]}/{answers.length}</h2>

      <HomeBtn css="btn-home"/>
      
    </div>
  )
}

export default Results