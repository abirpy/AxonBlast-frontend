import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import HomeBtn from '../HomePage/HomeBtn'

const FlashCards = ({text, handleChange}) => {
  console.log(text)
  return (
    <>
      <div className="center">
        <Card
          style={{ width: '18rem' }}
          className="mb-2 p-3 mb-2 bg-secondary text-white"
        >
          <Card.Header>FlashCard</Card.Header>
          <Card.Body>
            <Card.Text>
              {text}
            </Card.Text>
            <Button variant="warning" onClick={() => handleChange(Math.floor(Math.random() * 3) + 1)}>NEXT</Button>
          </Card.Body>
        </Card>
      </div>
      <HomeBtn css="btn-home"/>
    </>
  )
}

export default FlashCards