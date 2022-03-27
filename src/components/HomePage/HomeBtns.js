import QuizButton from "../QuizPage/QuizButton"
import ProgressBtn from "../ProgressPage/ProgressBtn"
import GamesBtn from "../Games/GamesBtn"
import FlashCardsBtn from "../Flashcards/FlashCardsBtn"
import SettingsBtn from "../SettingsPage/SettingsBtn"
import ProfileBtn from "../ProfilePage/ProfileBtn"

const HomeBtns = ({ updateQuizFinish, totalQuestions }) => {
  return (
    <div className="btns-homePage">
      <div className="inline">
        <SettingsBtn css={"btn-settings"} />
        <ProfileBtn css={"btn-profile"} />
      </div>
      <div className="inline">
        <QuizButton updateQuizFinish={updateQuizFinish} css={"btn-homePage btn-homePage-quiz"} totalQuestions={totalQuestions} questionNum={1} text={"Take Quiz"} />
        <GamesBtn css={"btn-homePage btn-homePage-games"} text={"Activities"}/>
      </div>
      <div className="inline">
        <FlashCardsBtn css={"btn-homePage btn-homePage-flashcards"} text={"Flash Cards"}/>
        <ProgressBtn css={"btn-homePage btn-homePage-progress"} />
      </div>
    </div>
  )
}

export default HomeBtns