import React from "react";
import styles from "./header.module.css";
import "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import  { faTableList } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { TOKEN } from "../../utils/constants";
import { GROUP } from "../../utils/constants";
import { NAME } from "../../utils/constants";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { cleanUser } from "../../redux/slices/userSlice";
import { Search } from '../../components/Search'

export const Header = () => {
  const navigate = useNavigate()
  const { token } = useSelector(state => state.user)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  
  const handleExit = () => {
    dispatch(cleanUser())
    return navigate('signin')
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["header_content"]}>
          <div className="col">
            <div className={styles["logo"]}> 
            <Link
            to={"/"}
            >
               DogFood <FontAwesomeIcon icon={faDog} />
             </Link>
             
            </div>
          </div>
          <div className="col">
          {token && <Search />}
            {/* <form className="d-flex" role="search">
              <input
                className={styles["form-control"]}
                type="search"
                placeholder="Поиск"
                aria-label="Search"
              />
              <button className={styles['btn-secondary']} type="submit">искать</button>
            </form> */}
          </div>
          <div className={styles["ico"]}>
            <FontAwesomeIcon icon={faTableList} onClick={() => navigate('/products')} />
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} onClick={() => navigate('/userme')} />
            {token ? <>
            <div className={styles["ico-text"]}  onClick={() => navigate('/userme')}>{user.name}</div> 
            <div className={styles["ico-exit"]} onClick={() => handleExit()}>
              <FontAwesomeIcon icon={faRightFromBracket} /></div></> :  <div className={styles["ico-text"]}  onClick={() => navigate('/signin')}>Войти</div>
            }
          </div>
        </div>
      </div>
    </header>
  );
};
