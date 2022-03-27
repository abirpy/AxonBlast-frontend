import HomeBtn from "../HomePage/HomeBtn"
import profilePic from "./profilePic.jpg"

const Profile = () => {
  return (
    <div>
      <div className="profilePic">
        <img src={profilePic} alt="Profile Picture" className="rounded-corners" />
        <h1 style={{color: "white", fontSize: "35px", marginTop: "25px"}}>Welcome András!</h1>
        <div style={{color: "white", textAlign: "left", lineHeight: "13px", marginTop: "18px"}}>
          <p>Age: 76</p>
          <p>Occupation: Stock Photo Model</p>
          <p>Hobbies: Hiking, Solving Puzzles, gardening</p>
        </div>
        <button className="btn" style={{marginTop: "6px"}}>Update Profile</button>
      </div>
      <HomeBtn css="btn-home"/>
    </div>
  )
}

export default Profile