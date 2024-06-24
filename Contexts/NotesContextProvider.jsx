/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react"


const tempNotes =  [
  {
    title: "Introduction to React",
    body: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "Components in React",
    body: "React uses a component-based architecture for building UI elements.",
  },
  {
    title: "Virtual DOM in React",
    body: "React uses a virtual DOM for efficient rendering and updates.",
  },
  {
    title: "State and Props",
    body: "React components have state and receive props to manage data.",
  },
  {
    title: "React Hooks",
    body: "Hooks are a feature introduced in React 16.8 to use state and other React features in functional components.",
  },
  {
    title: "React Router",
    body: "React Router is a popular library for handling routing in React applications.",
  },
  {
    title: "Redux for State Management",
    body: "Redux is a predictable state container used for managing the application state in large-scale React applications.",
  },
  {
    title: "Styling in React",
    body: "There are several ways to style React components, including CSS modules, inline styles, and CSS-in-JS libraries.",
  },
  {
    title: "React Testing Library",
    body: "React Testing Library is a testing utility for testing React components in a user-centric way.",
  },
  {
    title: "React Native",
    body: "React Native is a framework for building mobile applications using React and native platform components.",
  }
];

const NotesContext = createContext();

function NotesContextProvider({ children }) {

  const [isFullNoteOpen, setIsFullNoteOpen] = useState(false);
  const [fullNoteContent, setFullNoteContent] = useState({});
       const [Allmemos, setAllMemos] = useState(function ()
       {
            return JSON.parse(localStorage.getItem('Allmemos')) ||tempNotes;     
       });

       useEffect(function () { 
         localStorage.setItem('Allmemos', JSON.stringify( Allmemos));
       }, [Allmemos]);
       

    const [tempSearchMemos, setTempSearchMemos] = useState([]);
       return (
              <NotesContext.Provider value={
                     {
                            Allmemos,
                            setAllMemos,
                            tempSearchMemos,
                            setTempSearchMemos,
                            tempNotes,
                            isFullNoteOpen,
                            setIsFullNoteOpen,
                            fullNoteContent,
                            setFullNoteContent
                            

                     }
              }>
                {children}
              </NotesContext.Provider>
       );
}

function useNotesContext()
{
       const value = useContext(NotesContext);
       return value;

}

export { NotesContextProvider , useNotesContext }
