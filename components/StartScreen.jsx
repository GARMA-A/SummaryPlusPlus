/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
 /* eslint-disable no-unused-vars */

import { useQuizContext } from "../Contexts/QuizContextProvider"

/* eslint-disable react/prop-types */
function StartScreen() {

       function handleRestart()
       {
              if (confirm("You will lose all the progress you have made so far. Will you continue anyway?"))
              dispatch({ type: 'restart' }) 
       }

       const { dispatch, phase } = useQuizContext();
       
     if(phase==='phase1')  return (
              <div className="start ">
                     <h2>Welcome to the React Quiz!</h2>  
                     <h3>(15 question in 4 mins)</h3>  
                     <h3 className="hard">(Get 30 points for hard Questions)</h3>  
                     <h3 className="medium">(Get 20 points for medium Questions)</h3>  
                     <h3 className="easy">(Get 10 points for easy ones)</h3>  
                     <button className="btn" onClick={() => dispatch({ type: 'startThePhase' })}>{`Start the Quiz!`}</button>
                    
              </div>
       )
       if(phase==='phase2')  return (
              <div className="start">
                   <h2 >You completed Phase 1 !🥳</h2>  
                     <h3>Let's get Harder Challenge</h3>  
                     <h3>Phase 2 !😎</h3>  
                     <button className="btn" onClick={() => dispatch({ type: 'startThePhase' })}>{`Start Phase 2 !`}</button>
                     <button className="btn restart" onClick={() =>handleRestart() }>{`Restart`}</button>
              </div>
       )
         if(phase==='phase3')  return (
              <div className="start">
                   <h2>You completed Phase 2 !🥳</h2>  
                     <h3>Let's get Harder Challenge</h3>  
                     <h3>Phase 3 !👀🔥</h3>   
                     <button className="btn" onClick={() => dispatch({ type: 'startThePhase' })}>{`Start Phase 3 !`}</button>
                     <button className="btn restart" onClick={() => handleRestart()}>{`Restart`}</button>
              </div>
       )
}

export default StartScreen
