/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Summary.module.css'

function Summary({ summaryItem }) {
      
       if(summaryItem.title===undefined) return <div className={styles.main}>
                     <h1 className={styles.title}>Please Select Item</h1></div>
     
 return (
              <div className={styles.main}>
                     <h1 className={styles.title}>{summaryItem.title }</h1>
                     <div className={styles.content}>
                            <h3 className={styles.subtitle}>Summary :</h3>
                                   <p className={styles.summarytext}>{summaryItem.summary}
                            </p>
                          
                            {summaryItem.example !== undefined && <><h3 className={styles.subtitle}>Example :</h3>
                             {summaryItem.example.split('\n').map(line => <p key={line} className={styles.summarytext}>{line}</p>)} </> }
                     
                     </div>
                  
              </div>
       );

}

export default Summary
