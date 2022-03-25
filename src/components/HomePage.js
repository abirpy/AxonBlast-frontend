import QuizButton from "./QuizButton"
import SomeBtn from "./SomeBtn"
import GamesBtn from "./GamesBtn"
import FlashCardsBtn from "./FlashCardsBtn"

const HomePage = ({ totalQuestions }) => {
  return (
    <div>
      <div className="inline">
        <QuizButton style={"btn-homePage btn-homePage-quiz"} totalQuestions={totalQuestions} questionNum={1} text={"Take Quiz"} />
        <GamesBtn style={"btn-homePage btn-homePage-games"} text={"Games"}/>
      </div>
      <div className="inline">
        <FlashCardsBtn style={"btn-homePage btn-homePage-flashcards"} text={"Flash Cards"}/>
        <SomeBtn text={"Show Progress"} style={"btn-homePage btn-homePage-progress"} />
      </div>
    </div>
  )
}

export default HomePage