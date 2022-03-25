import { Link } from "react-router-dom"

const HomeBtn = ({ style }) => {
  return (
    <div>
      <Link to='/'>
        <button className={`btn ${style}`}>Home</button>
      </Link>
    </div>
  )
}

export default HomeBtn