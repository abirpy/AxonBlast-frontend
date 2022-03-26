import { useEffect } from "react"

const Result = ({ answer, updateScore }) => {

  const checkAnswer = () => {
    console.log(answer.key === answer.input)
    if (answer.key === answer.input) {
      updateScore()
    }
  }

  return (
    <div>
      <h3 onLoad={() => console.log(1)} className='results-k'><b>{answer.id}. Correct Answer: </b>{answer.key}</h3>
      <h4 className='results-i'><b>Your Answer: </b>{answer.input}</h4>
    </div>
  )
}

export default Result