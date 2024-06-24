/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer } from "react";

const localStatus = localStorage.getItem('status');

const initialState = {
       questions: [], status: localStatus ,
       curQuestionIndex: 0, answer: null,
       points: 0, highscore: 0, phase: 'phase1',
       seconds: 240
};


function reducer(state , action)
{
       const curquestion = state.questions[state.curQuestionIndex];
       switch (action.type)
       {
              case 'restart': return initialState
              case 'phaseReceived':
                     return { ...state, questions: action.payload, status: "ready" ,curQuestionIndex:0 };
              case 'dataFaild':
                     return { ...state, status: 'error' };
              case 'startThePhase':
                     return { ...state, status: 'active' };
              case 'newAnswerRecived':
                     return {
                            ...state, answer: action.payload
                            , points: curquestion.correctOption === action.payload ?
                            state.points +
                            curquestion.points :
                            state.points
                     };
              case 'nextQuestion':
                     return { ...state, curQuestionIndex: state.curQuestionIndex + 1, answer: null };
              case 'finishThePhase':
                     return {
                            ...state, status: 'finish',
                            highscore: state.highscore + state.points
                      };
              case 'phase2':
                     return { ...state, phase: 'phase2', answer: null, points: 0 , seconds:180 }
              case 'phase3':
                     return { ...state, phase: 'phase3', answer: null, points: 0, seconds: 180 }
              case 'decSeconds':
                     return {...state , seconds:state.seconds-1}
              
              default: throw Error("unknon action type");
       }
}

const QuizContext = createContext();

function QuizContextProvider({children}) {
  const [{status ,questions , curQuestionIndex ,answer ,points ,highscore ,phase ,seconds} , dispatch]  = useReducer(reducer , initialState)
       const maxPossiblePoints = questions.reduce((acc, cur) => acc + cur.points, 0);
    
       useEffect(function () { 
    document.title = "React Quiz";
    () => document.title = "Summary++";
  }, []);

       useEffect(function () { 
              localStorage.setItem('status', JSON.stringify(status));
       }, [status]);
       useEffect(function () {
            
              async function getPhase()
              {
                     try {
                            const res = await fetch('https://raw.githubusercontent.com/GARMA-A/QuizData/main/phases.json');
                            if (!res.ok) throw new Error();
                            const data = await res.json();
                            if (!data) throw new Error();
                            dispatch({ type: 'phaseReceived', payload: data[phase] });
                        
                     }
                     catch (err) {
                            // console.log(err.message)
                            dispatch({ type: 'dataFaild' });

                     }
              }
            const delay= setTimeout(() => getPhase(), 1000);
            return () => clearTimeout(delay);
             
        }, [phase]);


       return <QuizContext.Provider value={
                     {
                            status, questions,
                            curQuestionIndex,
                            answer,
                            points,
                            highscore,
                            phase,
                            seconds,
                            maxPossiblePoints,
                            dispatch
                     }}>
                     {children}
           </QuizContext.Provider>
       
}

function useQuizContext()
{
       const value = useContext(QuizContext);
       if (value === undefined) throw new Error("here is the error in the context component");
       return value;

}

export { QuizContextProvider , useQuizContext }
