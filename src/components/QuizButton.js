import { Link } from 'react-router-dom'

const QuizButton = ({ css, clearInput, totalQuestions, questionNum, text }) => {
  return (
    <div>
      <Link to={questionNum<=totalQuestions ? `/q${questionNum}` : '/results'}>
        <button className={`btn ${css}`} onClick={clearInput}>{text}</button>
      </Link>
    </div>
  )
}

export default QuizButton