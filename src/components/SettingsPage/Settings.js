import ListGroup from 'react-bootstrap/ListGroup'
import HomeBtn from '../HomePage/HomeBtn'

const Settings = () => {
  return (
    <div>
      <div className="results-header normal-header">
        Instructions
      </div>
      <div className="instructions">
        1. Pressing the quiz button will start a new quiz every time
        <br></br>
        <br></br>
        2. Show progress shows the quiz performance over a long period of time
        <br></br>
        <br></br>
        3. The flashcards button will show a series of flashcards
        <br></br>
        <br></br>
        4. The Games button have links to different games beneficial to people with dementia
        <br></br>
        <br></br>
      </div>
      

      <HomeBtn css="btn-home"/>
  </div>
  )
}

export default Settings