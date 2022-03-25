import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const FlashCardsBtn = ({text}) => {
  return (
    <div>
      <Link to = {'\Flashcards'}>
        <button className='btn'>{text}</button>
      </Link>
    </div>
  )
}

export default FlashCardsBtn