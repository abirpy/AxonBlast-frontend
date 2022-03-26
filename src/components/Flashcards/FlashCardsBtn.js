import { Link } from 'react-router-dom'

const FlashCardsBtn = ({css, text }) => {
  return (
    <div>
      <Link to = {'/Flashcards'}>
        <button className={`btn ${css}`}>{text}</button>
      </Link>
    </div>
  )
}

export default FlashCardsBtn