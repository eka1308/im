import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usermeFetch } from "../../api/user";
import styles from './user.module.css';
import { useQuery } from "react-query";
import { TOKEN } from "../../utils/constants"
import { GROUP } from "../../utils/constants"
import { useAuth } from "../../hooks/useAuth"

export const Userme = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const group = localStorage.getItem(GROUP);


  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getUserMe'],
    queryFn: async () => {
      const res = await usermeFetch(token, group);
      const responce = await res.json()
      return responce;
    }
   
  })

  if (isLoading) return <p>Идет загрузка...</p>

  if (isError) return <p>Произошла ошибка: {error}</p>
 
  return (
    <div className={styles['wrapper']}>
         
      
      <div className={styles['card']} >
             <img src={data.avatar} className={styles['card-img-top']}  alt={ data.name }  />
             <div className={styles['card-body']} >
             <h2 className={styles['card-name']} >{ data.name }</h2>
              <div className={styles['card-price']} >{data.about}  </div>
              <div className={styles['card-wight']} >{data.email} </div>
              <div className={styles['card-wight']} >{data.group} </div>
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
