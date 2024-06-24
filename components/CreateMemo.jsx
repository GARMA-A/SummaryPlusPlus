/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './CreateMemo.module.css'
import { useNotesContext } from '../Contexts/NotesContextProvider';

function CreateMemo() {
       const { setAllMemos } = useNotesContext();
       const [title, setTitle] = useState("");
       const [body, setBody] = useState("");

       function handleCreateMemo()
       {
              if (title === "" || body === "") return;

              const newMemo = { title: title, body: body };
              setAllMemos((oldMemos) => [...oldMemos, newMemo])
              setTitle("");
              setBody("");

       }
       return (
              <div className={styles.container}>
                     <div className={styles.mainContnet}>
                     <input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                     <textarea placeholder='Note Content'  value={body} onChange={(e)=>setBody(e.target.value)} />
                      <button className={styles.btn} onClick={()=>handleCreateMemo()}>Create Memo</button>
                      </div>
              </div>
       )
}

export default CreateMemo
