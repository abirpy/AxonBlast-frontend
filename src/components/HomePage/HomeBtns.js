<<<<<<< HEAD:src/components/HomePage.js
import QuizButton from "./QuizButton"
import SomeBtn from "./SomeBtn"
import GamesBtn from "./Games/GamesBtn"
import FlashCardsBtn from "./Flashcards/FlashCardsBtn"
import ProgressBtn from "./ProgressBtn"
=======
import QuizButton from "../QuizPage/QuizButton"
import ProgressBtn from "../ProgressPage/ProgressBtn"
import GamesBtn from "../Games/GamesBtn"
import FlashCardsBtn from "../Flashcards/FlashCardsBtn"
>>>>>>> 67c0fb10d77f297ca56e01d38dca87bdcc0689f6:src/components/HomePage/HomeBtns.js

const HomeBtns = ({ totalQuestions }) => {
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

export default HomeBtns