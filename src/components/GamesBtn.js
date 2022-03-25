import { Link } from 'react-router-dom'
import Links from './Links'

const GamesBtn = ({ style, text }) => {
  return (
    <div>
        <Link to = {'/games'}>
            <button className={`btn ${style}`}>{text}</button>
        </Link>
    </div>
  )
}

export default GamesBtn