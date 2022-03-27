import { Link } from "react-router-dom"
import homeIcon from './homeIcon.png';

const HomeBtn = ({ css }) => {
  return (
    <div>
      <Link to='/'>
        <button className={`btn ${css}`}>
          <img src={homeIcon} alt="Home Icon" width="25px" height="25px" />
        </button>
      </Link>
    </div>
  )
}

export default HomeBtn