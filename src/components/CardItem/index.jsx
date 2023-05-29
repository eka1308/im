import { useNavigate } from "react-router-dom";
import styles from "./carditem.module.css";
import "./carditem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export const CardItem = ({ product }) => {
  const navigate = useNavigate();
 

  return (
    <div className={styles["card"]}>
      <img
        src={product.pictures}
        className={styles["card-img-top"]}
        alt={product.name}
      />
      <div className={styles["card-body"]}>
        { product.discount > 0 ?  <div className={styles["card-price-discount"]} >{product.price} &#8381;
          <span className={styles["discount"]}>
            <FontAwesomeIcon icon={faTag} /> -{product.discount}%
          </span>
        </div> : 
         <div className={styles["card-price"]}>{product.price} &#8381;</div>}
        <div className={styles["card-wight"]}>{product.wight} </div>
        <div
          className={styles["wrapper-name"]}
          onClick={() => navigate(`/products/${product["_id"]}`)}
        >
          <h2 className={styles["card-name"]}>{product.name}</h2>
        </div>

        <div className={styles["btns"]}>
          <button className={styles["btn-primary"]} type="submit">
            В корзину
          </button>

          <div className={styles["like"]}>
            <div>{product.likes.length} </div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};
