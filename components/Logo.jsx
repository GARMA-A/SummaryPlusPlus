
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom'
import styles from './Logo.module.css'


function Logo() {
       return (
            <NavLink to='/'> <div className={styles.loogoo}>
                            <img src='https://www.svgrepo.com/show/303500/react-1-logo.svg' alt='react img' />
                            <h1>Summary++</h1>
               </div></NavLink>
       )
}

export default Logo
