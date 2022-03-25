import QuizButton from "./QuizButton"
import SomeBtn from "./SomeBtn"

const HomePage = ({ totalQuestions }) => {
  return (
    <div>
      <div className="inline">
        <QuizButton style={"btn-homePage btn-homePage-quiz"} totalQuestions={totalQuestions} questionNum={1} text={"Take Quiz"} />
        <SomeBtn text={"Games"} style={"btn-homePage btn-homePage-games"} />
      </div>
      <div className="inline">
        <SomeBtn text={"Flashcards"} style={"btn-homePage btn-homePage-flashcards"} />
        <SomeBtn text={"Show Progress"} style={"btn-homePage btn-homePage-progress"} />

      </div>
    </div>
  )
}

export default HomePage