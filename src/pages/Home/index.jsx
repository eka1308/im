import styles from './home.module.css';
import img from '../../img/dog.png';
import { TOKEN } from "../../utils/constants";
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

export const Home = () => {
  const { token } = useSelector(state => state.user)
  const navigate = useNavigate()

  return (
    
    <div className={styles['main']}>
      <div className={styles['wrapper']} > 
      <div className={styles['enter']}> 
        <h2>Добро пожаловать! Это react pet-проект DOG FOOD!</h2>
        {token ?  <button className={styles['btn-primary']}  onClick={() => navigate('/products')}>В каталог</button> :  <div >
          <NavLink to={"/signin"}>Войдите</NavLink> или <NavLink to={"/signup"}>зарегистрируйтесь</NavLink>.</div>}
      </div>
      
      <div className={styles['home__img']}>
            <img src={ img } alt="pets" />
          </div>
      </div> 
    </div>
   
  )
}
