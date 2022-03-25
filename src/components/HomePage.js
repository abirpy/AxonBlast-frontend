import QuizButton from "./QuizButton"
import GamesBtn from "./GamesBtn"
import FlashCardsBtn from "./FlashCardsBtn"
import ProgressBtn from "./ProgressBtn"

const HomePage = ({ totalQuestions }) => {
  return (
    <div>
      <div className="inline">
        <QuizButton css={"btn-homePage btn-homePage-quiz"} totalQuestions={totalQuestions} questionNum={1} text={"Take Quiz"} />
        <GamesBtn css={"btn-homePage btn-homePage-games"} text={"Games"}/>
      </div>
      <div className="inline">
        <FlashCardsBtn css={"btn-homePage btn-homePage-flashcards"} text={"Flash Cards"}/>
        <ProgressBtn css={"btn-homePage btn-homePage-progress"} />
      </div>
    </div>
  )
}

export default HomePage