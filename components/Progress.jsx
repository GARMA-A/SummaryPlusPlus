/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useQuizContext } from "../Contexts/QuizContextProvider"

function Progress() {
       const { curQuestionIndex, maxPossiblePoints, points, answer ,questions } = useQuizContext();
       const curQuestion = questions[curQuestionIndex];
       const userAnswer = answer;
       return (
              <header className="progress">
                     
                     {curQuestion?.points===10&&<h1 className="easy">10 Points</h1>}
                     {curQuestion?.points===20&&<h1 className="medium">20 Points</h1>}
                     {curQuestion?.points===30&&<h1 className="hard">30 Points</h1>}
                     <progress max={15} value={(curQuestionIndex+Number(userAnswer!==null))}/>
                     <p>Question <strong> { curQuestionIndex+1}</strong> /15</p>
                     <p><strong>{points}</strong>/{maxPossiblePoints}</p>
              </header>
       )
}

export default Progress
