import ListGroup from 'react-bootstrap/ListGroup'
import HomeBtn from '../HomePage/HomeBtn'
// import 'bootstrap/dist/css/bootstrap.css';


const Links = () => {
  return (
    <div>
      <h3 className="results-header normal-header">Game Links</h3>
      <ListGroup className="center">
        <ListGroup.Item variant="dark">
          <a target='_blank' href={"https://stayingsharp.aarp.org/about/brain-health/games-play/?CMP=RDRCT-MEM-SSS-030521iii"}>Staying Sharp</a>
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <a target='_blank' href={"https://apps.apple.com/gb/app/flower-garden-grow-flowers/id311265471"}>Grow Flowers</a>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <a target='_blank' href={"https://apps.apple.com/us/app/mindmate-empowering-people/id1030422375"}>MindMate</a>
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <a target='_blank' href={"https://apps.apple.com/us/app/lumosity-mobile/id577232024"}>Luminosity</a>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <a target='_blank' href={"https://apps.apple.com/us/app/piano-with-songs/id408878018"}>Piano With Apps</a>
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <a target='_blank' href={"http://www.wixot.com/wordsearch"}>Word Search Colorful</a>
        </ListGroup.Item>
      </ListGroup>
      <HomeBtn css="btn-home"/>
    </div>
  )
}

export default Links