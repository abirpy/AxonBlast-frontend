import { Link } from 'react-router-dom'

const ProgressBtn = ({ css }) => {
  return (
    <div>
      <Link to = {'/progress'}>
        <button className={`btn ${css}`}>Show Progress</button>
      </Link>
    </div>
  )
}

export default ProgressBtn