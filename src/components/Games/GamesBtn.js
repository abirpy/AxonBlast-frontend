import { Link } from 'react-router-dom'

const GamesBtn = ({ css, text }) => {
  return (
    <div>
        <Link to = {'/tasks'}>
            <button className={`btn ${css}`}>{text}</button>
        </Link>
    </div>
  )
}

export default GamesBtn