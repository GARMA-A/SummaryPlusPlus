
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage';
import PageNotfound from '../pages/PageNotfound';
import DocumentationPage from "../pages/DocumentationPage";
import QuizPage from "../pages/QuizPage";
import NotesPage from "../pages/NotesPage";
import { QuizContextProvider } from "../Contexts/QuizContextProvider";
import { NotesContextProvider } from "../Contexts/NotesContextProvider";


function App() {


  return (
    <>
      <QuizContextProvider>
        <NotesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="quizpage" element={<QuizPage/>} />
          <Route path="documentationpage" element={<DocumentationPage />} />
              <Route path="notespage" element={<NotesPage />} />
  
          <Route path="*" element={<PageNotfound />} />
        </Routes>
          </BrowserRouter>
        </NotesContextProvider>
      </QuizContextProvider>

   </>
  );
}

export default App
