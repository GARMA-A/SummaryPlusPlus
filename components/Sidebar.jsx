/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './Sidebar.module.css';

function Sidebar({ allsummary  , setSummaryItem}) {
       // console.log(summary);

       return (
              <div className={styles.sidebar}>
                     {allsummary.map((obj, i) =>
                     <h3 key={i}  onClick={()=>setSummaryItem(pastObj=>pastObj.title===obj.title?{}:obj)}>{obj.title}</h3>)}
              </div>
       );
}

export default Sidebar;
