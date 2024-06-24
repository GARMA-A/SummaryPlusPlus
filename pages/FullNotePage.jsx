/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from '../components/FullNotePage.module.css'
import { useNotesContext } from "../Contexts/NotesContextProvider";


function FullNotePage({ fullNoteContent }) {
       
       const { setIsFullNoteOpen } = useNotesContext();
       return (
              <>
                     <div className={styles.all}>
                     <div className={styles.container}>
                                   <h2 className={styles.title}>{fullNoteContent.title}</h2>      
                                   <h3 className={styles.content}>{fullNoteContent.body}</h3>      
                            <button className={styles.btn} onClick={() =>setIsFullNoteOpen(false) }>Back</button>
                     </div>
                      </div>
              </>
       )
}

export default FullNotePage
