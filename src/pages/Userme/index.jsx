import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usermeFetch } from "../../api/user";
import styles from './user.module.css';

import { TOKEN } from "../../utils/constants"
import { GROUP } from "../../utils/constants"

export const Userme = () => {
  const navigate = useNavigate();
  const [userme, setUserme] = useState({});

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (!token) navigate('/signin')
  }, [navigate]);

  useEffect(() => {
        const token = localStorage.getItem(TOKEN)
        const group = localStorage.getItem(GROUP)
        console.log(group)
        const fetchUserme = async () => {
        const res = await usermeFetch(token, group)
    
     
          if (res.ok) {
            const responce = await res.json();
            console.log(responce);
            setUserme(responce);
            
            
          } else {
            const responce = await res.json();
            console.log(responce.message);
          }
    
          
        }
        fetchUserme()
      }, []) 

 


  return (
    <div className={styles['wrapper']}>
         
      
      <div className={styles['card']} >
             <img src={userme.avatar} className={styles['card-img-top']}  alt={ userme.name }  />
             <div className={styles['card-body']} >
             <h2 className={styles['card-name']} >{ userme.name }</h2>
              <div className={styles['card-price']} >{userme.about}  </div>
              <div className={styles['card-wight']} >{userme.email} </div>
              <div className={styles['card-wight']} >{userme.group} </div>
              <div className={styles['wrapper-name']} ></div>
               
              <div className={styles['btns']} >
                <button className={styles['btn-primary']}  type="submit" >Изменить</button> 
                <button className={styles['btn-primary']}  onClick={() => navigate('/products')}>В каталог</button>
                
                
              </div>
            </div>
           </div> 

      
    </div>
  )
}
