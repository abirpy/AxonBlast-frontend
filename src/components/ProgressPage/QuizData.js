const QuizData = ({ score, index }) => {
  return (
    <div>
      <h3 className='progress-quiz'><b>Quiz {index+1} Score: </b>{score}</h3>
    </div>
  )
}

export default QuizData