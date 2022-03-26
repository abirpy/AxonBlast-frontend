import { Link } from "react-router-dom"
import settingsIcon from "./settingsIcon.png"

const SettingsBtn = ({ css }) => {
  return (
    <div>
      <Link to='/settings'>
        <button className={`btn ${css}`}>
          <img src={settingsIcon} alt="Settings Icon" width="28px" height="28px" />
        </button>
      </Link>
    </div>
  )
}

export default SettingsBtn