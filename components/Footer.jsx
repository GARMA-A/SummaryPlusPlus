/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import NextButton from "./NextButton"
import { useQuizContext } from "../Contexts/QuizContextProvider";
import Timer from "./Timer"

 /* eslint-disable react/prop-types */
function Footer() {
       const { answer, curQuestionIndex, dispatch, seconds } = useQuizContext();
       const userAnswer = answer;
       return (
       <div className="footer">
       <Timer seconds={seconds} dispatch={dispatch} />
       <NextButton curQuestionIndex={curQuestionIndex} 
       userAnswer={userAnswer}
       dispatch={dispatch} />
       </div>
       )
}

export default Footer
