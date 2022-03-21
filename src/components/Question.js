import Answer from './Answer'

const Question = ({ totalQuestions, question, addAnswer }) => {
  return (
    <div className='question'>
      <h3>{question.text}</h3>
      <Answer totalQuestions={totalQuestions} question={question} addAnswer={addAnswer} />
    </div>
  )
}

export default Question