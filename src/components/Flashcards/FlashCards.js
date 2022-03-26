import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const FlashCards = ({text, handleChange}) => {
  console.log(text)
  return (
    <div className="center">
      <Card
        style={{ width: '18rem' }}
        className="mb-2"
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
      )
}

export default FlashCards