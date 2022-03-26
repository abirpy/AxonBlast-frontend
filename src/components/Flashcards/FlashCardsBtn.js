import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const FlashCardsBtn = ({style, text }) => {
  return (
    <div>
      <Link to = {'/Flashcards'}>
        <button className={`btn ${style}`}>{text}</button>
      </Link>
    </div>
  )
}

export default FlashCardsBtn