import styles from './footer.module.css';
import img from '../../img/footer-puppy.png';
import './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
      <footer className={styles['footer']}>
         <div className={styles['wrapper']}>
       <div className={styles['footer__content']}>
         <div className={styles['footer__contacts']}>
            <div className={styles['logo']}>DogFood <FontAwesomeIcon icon={faDog} /></div> 
             
             <div className={styles['contacts']}><FontAwesomeIcon icon={faPhone} /> 8 800 00 00 </div>
             <div className={styles['contacts']}><FontAwesomeIcon icon={faEnvelope} /> mail@gmail.com </div>
        </div>

        <div className={styles['footer__navigation']}>
          <ul className={styles['navigation']}>
           <li className={styles['navigationlink']}><a href="">Каталог</a></li>
           <li className={styles['navigationlink']}><a href="">Акции</a></li>
           <li className={styles['navigationlink']}><a href="">Популярные товары</a></li>
           
          </ul>
        </div>
        <div className={styles['footer__navigation']}>
          <ul className={styles['navigation']}>
           <li className={styles['navigationlink']}><a href="">Новости</a></li>
           <li className={styles['navigationlink']}><a href="">Отзывы</a></li>
           <li className={styles['navigationlink']}><a href="">Часто спрашивают</a></li>
         </ul>
        </div>
        <div className={styles['footer__navigation']}>
          <ul className={styles['navigation']}>
           <li className={styles['navigationlink']}><a href="" >Оплата и доставка</a></li>
           <li className={styles['navigationlink']}><a href="">Контакты</a></li>
            <li className={styles['navigationlink']}><a href="">Обратная связь</a></li>
          </ul>
        </div>
          <div className={styles['footer__img']}>
            <img src={ img } alt="pets" />
          </div>
          
        </div>
     </div>
      </footer>
    )
  }