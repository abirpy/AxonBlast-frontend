import Result from "./Result"

const Results = ({ answers }) => {
  return (
    <div className='results-entire'>
      {answers.map((answer) => 
        <Result key={answer.id} answer={answer} />
      )}
    </div>
  )
}

export default Results