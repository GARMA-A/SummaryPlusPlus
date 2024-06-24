/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './SearchForMemo.module.css'
import { useNotesContext } from '../Contexts/NotesContextProvider';
function SearchForMemo() {
       const { setAllMemos, Allmemos, setTempSearchMemos ,tempNotes } = useNotesContext();
       const deleteAllMemos = setAllMemos;
      
       const [searchQuery, setSearchQuery] = useState("");
      
       function handleSearchMemos(e)
       {
           if (e.target.value === " ") setTempSearchMemos([]);
            setSearchQuery(e.target.value);
            setTempSearchMemos(Allmemos.filter((obj)=>`${obj.title} ${obj.body}`.toLowerCase().includes(searchQuery.toLowerCase())))
       }
       function handleReset()
       {
               if(confirm("Are you sure you want to Reset Memos to Default Memos "))
              {
                    setAllMemos(() => tempNotes);
              }
             
       }
      
       function handleDeleteAllMemos()
       {
             if(confirm("Are you sure you want to delete all memos "))
              {
                    deleteAllMemos(() => []);
                    setTempSearchMemos(()=>[]) 
              }
              
       }
      
       return (
              <div className={styles.container}>
                     <div className={styles.mainContnet}>
                            <input placeholder='Search' value={searchQuery} onChange={(e) => handleSearchMemos(e)} />
                            <button className={styles.btn} onClick={() => handleDeleteAllMemos()} >Delete All</button>
                            <button className={styles.btn} onClick={() => handleReset()}>Reset</button>
                     </div>
              </div>
       );
}

export default SearchForMemo
