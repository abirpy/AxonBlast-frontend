import { Link } from 'react-router-dom'

const QuizButton = ({ clearInput, totalQuestions, questionNum, text }) => {
  return (
    <div>
      <Link to={questionNum<=totalQuestions ? `/q${questionNum}` : '/results'}>
        <button className='btn' onClick={clearInput}>{text}</button>
      </Link>
    </div>
  )
}

export default QuizButton