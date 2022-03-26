import QuizButton from "./QuizButton"
<<<<<<< HEAD
import SomeBtn from "./SomeBtn"
import GamesBtn from "./Games/GamesBtn"
import FlashCardsBtn from "./Flashcards/FlashCardsBtn"
=======
import GamesBtn from "./GamesBtn"
import FlashCardsBtn from "./FlashCardsBtn"
import ProgressBtn from "./ProgressBtn"
>>>>>>> 5cc03707a5f558d2b710d5be70b8c6ff36b5c744

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