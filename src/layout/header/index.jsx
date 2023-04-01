import React from 'react';
import styles from './header.module.css';
import './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';




export const  Header = () => {

    return (
     <header className={styles['header']}>
       <div className={styles['wrapper']}>
         <div className={styles['header_content']}>
              
                 <div className="col">
                 <div className={styles['logo']}>DogFood <FontAwesomeIcon icon={faDog} /></div> 
                 </div>
                 <div className="col">
                         <form className="d-flex" role="search">
                            <input className={styles['form-control']} type="search" placeholder="Поиск" aria-label="Search" />
                            {/* <button className={styles['btn-secondary']} type="submit">искать</button> */}
                         </form>
                 </div>
                 <div className={styles['ico']}>
                    <FontAwesomeIcon icon={faCartShopping} />
                     <FontAwesomeIcon icon={faUser} /> <div className={styles['ico-text']}>Войти</div>
                 </div>
                 
             
        </div>
      </div>
      </header>
    )
  }
  
 