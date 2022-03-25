import { Link } from 'react-router-dom'
import Links from './Links'

const GamesBtn = ({text}) => {
  return (
    <div>
        <Link to = {'\games'}>
            <button className='btn'>{text}</button>
        </Link>
    </div>
  )
}

export default GamesBtn