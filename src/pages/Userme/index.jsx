import { useNavigate } from "react-router-dom";
import { usermeFetch } from "../../api/user";
import styles from './user.module.css';
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth"
import { useSelector } from "react-redux"

export const Userme = () => {
  const { token } = useAuth();
  const user = useSelector(state => state.user)
  const group = user.group;
  const navigate = useNavigate();
  
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
