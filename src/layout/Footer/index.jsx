import styles from "./footer.module.css";
import img from "../../assets/img/footer-puppy.png";
import "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { NavLink, useNavigate } from 'react-router-dom'
import { LinkItem  } from "../../components/LinkItem";

const links = 
[{name: 'Каталог', link:'/products'}, 
{name: 'Личный кабинет', link:'/userme'},
{name: 'Регистрация', link:'/signup'}, 
{name: 'Популярные товары', link:'/favorites'}, 
{name: 'Новости', link:'/news'}, 
{name: 'Отзывы', link:'/revews'}, 
{name: 'Часто спрашивают', link:'/questions'}, 
{name: 'Контакты', link:'/contacts'}, 
{name: 'Оплата и доставка', link:'/delivery'}];

export const Footer = () => {
  // const navigate = useNavigate(); это на будущее, еще добавятся ссылки

  return (
    <footer className={styles["footer"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["content"]}>
          <div className={styles["contacts"]}>
            <div className={styles["logo"]}>
              DogFood <FontAwesomeIcon icon={faDog} />
            </div>
            <div className={styles["cont"]}>
              <FontAwesomeIcon icon={faPhone} /> 8 800 00 00{" "}
            </div>
            <div className={styles["cont"]}>
              <FontAwesomeIcon icon={faEnvelope} /> mail@gmail.com{" "}
            </div>
          </div>

         
            <ul className={styles["navigation"]}>

             {links.map((link, index) => {
                return <LinkItem
                key={index}
                link={link}
                  />
                })}
            </ul>
            
          
          <div className={styles["footer__img"]}>
            <img src={img} alt="pets" />
          </div>
        </div>
      </div>
    </footer>
  );
};
