/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNotesContext } from '../Contexts/NotesContextProvider';
import styles from './MemoCard.module.css'
function MemoCards({ title, body ,onDeleteMemo }) {
       const { setIsFullNoteOpen , setFullNoteContent } = useNotesContext();
       function handleDeleteMemo()
       {
              onDeleteMemo((oldMemos)=>oldMemos.filter((obj)=>(title!==obj.title&&body!==obj.body)))
       }
       function handleClickOnMemo()
       {
              setIsFullNoteOpen(() => true)
              setFullNoteContent({ title: title, body: body });

       }

       return (
              <div className={styles.all}>
              <div className={styles.container}  >
              <div className={styles.header}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.x} onClick={()=>handleDeleteMemo()} >&times;</p>  
               </div>
              <p className={styles.content} onClick={()=>handleClickOnMemo()}>{body}</p>       
              </div>
              </div>
                    
       );
}


export default MemoCards
