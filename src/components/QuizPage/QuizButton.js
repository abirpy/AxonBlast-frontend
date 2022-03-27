import { Link } from 'react-router-dom'

const QuizButton = ({ updateQuizFinish, css, clearInput, totalQuestions, questionNum, text }) => {

  return (
    <div>
      <Link to={questionNum<=totalQuestions ? `/q${questionNum}` : '/results'}>
        <button className={`btn ${css}`} onClick={questionNum === 1 ? updateQuizFinish : clearInput}>{text}</button>
      </Link>
    </div>
  )
}

export default QuizButton