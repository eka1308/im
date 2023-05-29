import React from "react";
import styles from "./header.module.css";
import "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import  { faTableList } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cleanUser } from "../../redux/slices/userSlice";
import { Search } from '../../components/Search'
import { Modal } from '../../components/Modal'
import { ProductForm } from '../../components/AddProductForm'
import { useState } from 'react'


export const Header = () => {
  const navigate = useNavigate()
  const { token } = useSelector(state => state.user)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [addProductModal, setAddProductModal] = useState(false)
  

  const  handleExit= () => {
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
            <h1>еда для собак</h1>
          </div>
          <div className="col" >
          {token && <Search />}
          </div>
          <div className={styles["ico"]}>
            <FontAwesomeIcon icon={faTableList} onClick={() => navigate('/products')} />
            <FontAwesomeIcon icon={faCartShopping} />
            
            {token ? <>
            <div className={styles["ico-text"]} onClick={() => setAddProductModal(true)}><FontAwesomeIcon icon={faPlus} size="xl" /> </div>
            <FontAwesomeIcon icon={faUser} onClick={() => navigate('/userme')} />
            <div className={styles["ico-text"]}  onClick={() => navigate('/userme')}>{user.name}</div> 
            <div className={styles["ico-exit"]} onClick={() => handleExit()}>
              <FontAwesomeIcon icon={faRightFromBracket} /></div></> :  <div className={styles["ico-text"]}  onClick={() => navigate('/signin')}>Войти</div>
            }
          </div>
        </div>
      </div>
      <Modal isOpen={addProductModal} closeModal={() => setAddProductModal(false)} >
        <ProductForm token={token} closeModal={() => setAddProductModal(false)} />
      </Modal>
    </header>
  );
};
