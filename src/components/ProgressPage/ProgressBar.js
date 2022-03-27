import HomeBtn from "../HomePage/HomeBtn"
import ProgBar from 'react-bootstrap/ProgressBar'

const ProgressBar = ({ score, totalQuestions }) => {
  return (
    <div>
      <h3 className="results-header normal-header">Progress</h3>
      <div className="progressBar">
        <ProgBar now={100 * score / totalQuestions} />
      </div>
      <HomeBtn css="btn-home"/>
    </div>
  )
}

export default ProgressBar