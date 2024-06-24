/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useQuizContext } from "../Contexts/QuizContextProvider";

/* eslint-disable react/prop-types */
function Question() {
       const { questions, curQuestionIndex, answer, dispatch } = useQuizContext();

       const curQuestion = questions[curQuestionIndex];
       const userAnswer = answer;
       console.log(curQuestion);
       return (
              <div>
                     <h4>{curQuestion.question}</h4>
                     <div className="options">
                     {curQuestion.options.map((option,i) =>
                            <Options key={option} curOptionIndex={i} dispatch={dispatch}  userAnswer={userAnswer} correctAnswer={curQuestion.correctOption}>
                            {option}</Options>)}
                     </div>
              </div>
       );
}

function Options(
       { children, curOptionIndex,
       dispatch,
       userAnswer,correctAnswer })
{
       const optionStyleAfterClick = function ()
       {
             
              if (userAnswer === null) return "";
              else if (userAnswer === curOptionIndex && userAnswer!==correctAnswer) return 'selected wrong';
              else if (userAnswer === curOptionIndex && userAnswer===correctAnswer) return 'selected correct';
              else if (userAnswer !== curOptionIndex && curOptionIndex===correctAnswer) return 'correct';
              else if (userAnswer !== curOptionIndex && curOptionIndex!==correctAnswer) return 'wrong';
             
              
       }

       // console.log(curOptionIndex);    
       return (
       <button
       className={`btn btn-option ${optionStyleAfterClick()}`} 
       onClick={() => dispatch({ type: 'newAnswerRecived', payload: curOptionIndex })}
       disabled={userAnswer!==null}>
       {children}</button>);
}

export default Question
