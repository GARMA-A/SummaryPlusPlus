/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function NextButton({ userAnswer, dispatch, curQuestionIndex }) {
    if (userAnswer === null) return;
    if(curQuestionIndex<14)  return (<button className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}>
            Next</button>);
      
     if(curQuestionIndex===14)  return (<button className="btn btn-ui"
            onClick={() => dispatch({ type: "finishThePhase" })}>
            Finish</button>);
}

export default NextButton
