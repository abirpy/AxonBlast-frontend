import { useEffect } from "react"

const Result = ({ answer }) => {
  return (
    <div>
      <h3 className='results-k'><b>{answer.id}. Correct Answer: </b>{answer.key}</h3>
      <h4 className='results-i'><b>Your Answer: </b>{answer.input}</h4>
    </div>
  )
}

export default Result