/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo  from "./Logo.jsx";

function Navbar() {
       return (
              <div className={styles.nav} >
                    <Logo/> 
                     <ul className={styles.list}>
                           <li><NavLink to="/quizpage">Quiz</NavLink></li> 
                           <li><NavLink to="/documentationpage">Documentation</NavLink></li>    
                           <li><NavLink to="/notespage">Memo</NavLink></li>    
                     </ul>
              </div>
       );
}

export default Navbar
