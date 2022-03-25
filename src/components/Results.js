import HomeBtn from "./HomeBtn"
import Result from "./Result"

const Results = ({ answers }) => {
  return (
    <div className='results-entire'>
      <h3 className="results-header">Results</h3>
      {answers.map((answer) => 
        <Result key={answer.id} answer={answer} />
      )}
      <HomeBtn style="btn-home"/>
    </div>
  )
}

export default Results