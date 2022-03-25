import Card from 'react-bootstrap/Card'

const FlashCards = ({variant}) => {
  return (
    [
        'One',
        'Two',
        'Three',
        'Four'
      ].map((text, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
      ))
  )
}

export default FlashCards