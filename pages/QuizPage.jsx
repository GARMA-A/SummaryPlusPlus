/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Main from '../components/Main';
import Loading from "../components/Loading";
import Error from '../components/Error';
import StartScreen from "../components/StartScreen";
import Question from "../components/Question";
import Footer from "../components/Footer";
import Progress from "../components/Progress";
import Result from "../components/Result";
import '../components/quiz.css'
import Navbar from '../components/Navbar';
import { useQuizContext } from "../Contexts/QuizContextProvider";
function QuizPage() {
       const { status } = useQuizContext();
      return (<>
             
              {status!=='active'&&<Navbar />}
              <div className="app">
                   
                     <Main>
                            {status === 'loading' && <Loading />}
                            {status === 'error' && <Error />}
                            {status === 'ready' && <StartScreen/>}
                            {status === 'active' && <Progress/>}
                            {status === 'active' && <Question/>}
                            {status === 'active' && <Footer/>}
                            {status === 'finish' && <Result/>}
                     </Main>
              </div>
       </>);
}

export default QuizPage;
