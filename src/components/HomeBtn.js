import { Link } from "react-router-dom"

const HomeBtn = ({ css }) => {
  return (
    <div>
      <Link to='/'>
        <button className={`btn ${css}`}>Home</button>
      </Link>
    </div>
  )
}

export default HomeBtn