import styles from './notFoundPage.module.css';
import img from '../../assets/img/dogdul.png';

export const NotFoundPage = () => {

  return (
    
    <div className={styles['main']}>
      <div className={styles['wrapper']} > 
      <div className={styles['enter']}> 
        <h2> 404 :-( Извините, эта страница не существует или пока в разработке</h2>
         
      </div>
      
      <div className={styles['home__img']}>
            <img src={ img } alt="pets" />
          </div>
      </div> 
    </div>
   
  )
}
