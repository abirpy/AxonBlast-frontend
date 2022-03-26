import HomeBtn from "../HomePage/HomeBtn"
import Result from "./Result"
import { useEffect } from "react"

const Results = ({ answers, updateScore, score }) => {

  useEffect(() => {
    updateScore()
  }, [])

  return (
    <div className='results-entire'>
      <h3 className="results-header">Results</h3>

      <div className="results-ki">
        {answers.map((answer) => 
          <Result key={answer.id} answer={answer} updateScore={updateScore} />
        )}
      </div>

      <h2 className="score">Score: {score}/{answers.length}</h2>

      <HomeBtn css="btn-home"/>
    </div>
  )
}

export default Results