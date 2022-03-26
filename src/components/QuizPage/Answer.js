import { useState, useEffect } from 'react'
import QuizButton from './QuizButton'

const Answer = ({ totalQuestions, question, addAnswer }) => {
  const [input, setInput] = useState('')

  const clearInput = () => {
    addAnswer(question.id, input)
    setInput('')
  }

  return (
    <form>
      <div>
        <label className='answer'></label>
        <input 
          className='answer'
          type='text'
          placeholder='Enter your answer here'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <QuizButton css={"btn-quizPage"} clearInput={clearInput} totalQuestions={totalQuestions} questionNum={question.id+1} text={'Next Question'} />
    </form>
  )
}

export default Answer