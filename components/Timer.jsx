
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
function Timer({seconds , dispatch}) {

       useEffect(function () { 
              const dec = function ()
              {
                     if (seconds <= 0) dispatch({ type: 'finishThePhase' });
                    else dispatch({ type: 'decSeconds' });  
              }

              const timerId = setInterval(dec, 1000);
              return () => clearInterval(timerId);

       }, [dispatch, seconds]);
       
       const min =Math.floor( seconds / 60);
       const sec = seconds % 60;
       
       return (
              <div className="timer">
                     {min > 9 ? min : `0${min}`}:
                     {sec>9?sec:`0${sec}`}
                   
              </div>
       )
}

export default Timer
