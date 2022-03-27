import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import HomeBtn from '../HomePage/HomeBtn'
import { useState } from 'react'

const FlashCards = ({flashcard, handleNext, cardText, color, flipCard}) => {

  return (
    <>
      <div className="center">
        <Card
          style={{ width: '18rem' }}
<<<<<<< HEAD
          className="mb-2 p-3 mb-2 bg-warning text-white"
=======
          className={`mb-2 p-3 mb-2 bg-${color} text-white`}
>>>>>>> 39e2b00f2ecfbd5b2937c052fa5de9a42ee0b060
        >
          <Card.Header>FlashCard</Card.Header>
          <Card.Body>
            <Card.Text>
              {/* {cardText} */}
              { cardText === flashcard.text ? 
              <img src={cardText} alt="Settings Icon" width="200px" height="200px" /> :
              flashcard.ans
              }
            </Card.Text>
            <button className="btn" 
            onClick={flipCard}>
              FLIP</button>
            <button className="btn-r" 
            onClick={() => handleNext(Math.floor(Math.random() * 5) + 1)}>
              NEXT</button>
          </Card.Body>
        </Card>
      </div>
      <HomeBtn css="btn-home"/>
    </>
  )
}

export default FlashCards