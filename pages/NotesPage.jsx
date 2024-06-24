/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar"
import MemoCard from '../components/MemoCard';
import styles from '../components/NotesPage.module.css'
import SearchForMemo from "../components/SearchForMemo";
import CreateMemo from "../components/CreateMemo";
import { useNotesContext } from "../Contexts/NotesContextProvider";
import { Outlet } from "react-router-dom";
import FullNotePage from "./FullNotePage";



function NotesPage() {

       const { tempSearchMemos, Allmemos, setAllMemos , isFullNoteOpen ,fullNoteContent } = useNotesContext();

       return (<>
             
              {!isFullNoteOpen?<>
                     <Navbar />
                     <SearchForMemo />
                     <CreateMemo />
                     <div className={styles.notesContainer}>
                            {tempSearchMemos.length === 0 ? Allmemos.map((obj, i) => <MemoCard key={i} title={obj.title} body={obj.body} onDeleteMemo={setAllMemos} />)
                                   : tempSearchMemos.map((obj, i) => <MemoCard key={i} title={obj.title} body={obj.body} onDeleteMemo={setAllMemos} />)}
                     </div>
              </> : <FullNotePage fullNoteContent={fullNoteContent} />}
              
             
       </>)
}

export default NotesPage
