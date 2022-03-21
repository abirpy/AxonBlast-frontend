const Result = ({ answer }) => {
  return (
    <div>
      <h3 className='results-k'>{`${answer.id}. Correct Answer: ${answer.key}`}</h3>
      <h4 className='results-i'>{`Your Answer: ${answer.input}`}</h4>
    </div>
  )
}

export default Result