/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useQuizContext } from "../Contexts/QuizContextProvider";

/* eslint-disable react/prop-types */
function Result() {
       
       const { points, maxPossiblePoints, highscore, dispatch, phase } = useQuizContext();

       const percentage = Math.trunc((points / maxPossiblePoints) * 100);
     
       return (
            
              <>
                     {phase===3&&<h1>React Quiz has been completed</h1>}
                     <p className="result">You Scored <strong>{points}</strong> out of {maxPossiblePoints} ({percentage}%)</p>
                     <p className="highscore">Highscore:({highscore} points)🔥</p>
                     {phase==='phase1'&&<button className="btn btn-ui upo"
                            onClick={() => dispatch({ type: "phase2" })}>
                            Finish This Phase</button>}
                     {phase==='phase2'&&<button className="btn btn-ui upo"
                            onClick={() => dispatch({ type: "phase3" })}>
                            Finish This Phase</button>}
                     {phase==='phase3'&&<button className="btn btn-ui upo"
                            onClick={() => dispatch({ type: "restart" })}>
                            Restart!</button>}
              </>
       )
}

export default Result
