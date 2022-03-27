import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import HomeBtn from '../HomePage/HomeBtn'
import { useState, useEffect } from 'react'

const FlashCards = ({flashcard, handleNext, changeCardState, cardText, color, flipCard}) => {

  useEffect(() => {
    changeCardState()
  }, [flashcard])

  return (
    <>
      <div className="center">
        <Card
          style={{ width: '18rem' }}
          className={`mb-2 p-3 mb-2 bg-${color} text-white`}
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
            <button style={{ marginLeft:"25px" }} className="btn" 
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