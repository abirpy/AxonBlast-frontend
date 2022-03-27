import ListGroup from 'react-bootstrap/ListGroup'
import HomeBtn from '../HomePage/HomeBtn'
// import 'bootstrap/dist/css/bootstrap.css';


const Links = () => {
  return (
    <div>
      <h3 className="results-header normal-header">Activity List</h3>
      {/* <ListGroup className="center">
        <ListGroup.Item variant="dark">
          <a rel="noreferrer" target='_blank' href={"https://stayingsharp.aarp.org/about/brain-health/games-play/?CMP=RDRCT-MEM-SSS-030521iii"}>Staying Sharp</a>
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <a rel="noreferrer" target='_blank' href={"https://apps.apple.com/gb/app/flower-garden-grow-flowers/id311265471"}>Grow Flowers</a>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <a rel="noreferrer" target='_blank' href={"https://apps.apple.com/us/app/mindmate-empowering-people/id1030422375"}>MindMate</a>
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <a rel="noreferrer" target='_blank' href={"https://apps.apple.com/us/app/lumosity-mobile/id577232024"}>Luminosity</a>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <a rel="noreferrer" target='_blank' href={"https://apps.apple.com/us/app/piano-with-songs/id408878018"}>Piano With Apps</a>
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <a rel="noreferrer" target='_blank' href={"http://www.wixot.com/wordsearch"}>Word Search Colorful</a>
        </ListGroup.Item>
      </ListGroup> */}
      <div className="instructions">
        ➡ Since gardening is one of your hobbies, you might want to play the game Flower Garden
        <br></br>
        <br></br>
        ➡ Since you like problem-solving you can play the game Luminosity consists of games designed to exercise memory, speed, flexibility and problem-solving.
        <br></br>
        <br></br>
        ➡ Since you are very close to a 7-day streak, do oe more quiz today to fulfill your weekly goals
        <br></br>
        <br></br>
        ➡ You haven't done flashcards for a while. Challenge yourself by matching some names and faces.
        <br></br>
        <br></br>
      </div>
      <HomeBtn css="btn-home"/>
    </div>
  )
}

export default Links