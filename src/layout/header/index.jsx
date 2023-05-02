import React from "react";
import styles from "./header.module.css";
import "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { TOKEN } from "../../utils/constants";
import { GROUP } from "../../utils/constants";
import { NAME } from "../../utils/constants";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem(TOKEN);
  const name = localStorage.getItem(NAME);
  
  const handleExit = () => {
    localStorage.removeItem(TOKEN)
    localStorage.removeItem(GROUP)
    localStorage.removeItem(NAME)

    return navigate('signin')
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["header_content"]}>
          <div className="col">
            <div className={styles["logo"]}> 
            <NavLink
            to={"/"}
            >
               DogFood <FontAwesomeIcon icon={faDog} />
             </NavLink>
             
            </div>
          </div>
          <div className="col">
            <form className="d-flex" role="search">
              <input
                className={styles["form-control"]}
                type="search"
                placeholder="Поиск"
                aria-label="Search"
              />
              {/* <button className={styles['btn-secondary']} type="submit">искать</button> */}
            </form>
          </div>
          <div className={styles["ico"]}>
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} onClick={() => navigate('/userme')} />
            {token ? <>
            <div className={styles["ico-text"]}  onClick={() => navigate('/userme')}>{name}</div> 
            <div className={styles["ico-text"]} onClick={() => handleExit()}>
              <FontAwesomeIcon icon={faRightFromBracket} /></div></> :  <div className={styles["ico-text"]}  onClick={() => navigate('/signin')}>Войти</div>
            }
          </div>
        </div>
      </div>
    </header>
  );
};
