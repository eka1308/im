import { useNavigate } from "react-router-dom";
import styles from "./carditem.module.css";
import "./carditem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export const CardItem = ({ product }) => {
  const navigate = useNavigate();
  const stylePrice = {};
  const styleDiscount = {
    paddingLeft: "15px",
    position: "absolute",
    right: "1px",
    fontSize: "1.7rem",
    fontWeight: "600",
  };

  if (product.discount > 0) {
    stylePrice.color = "#a72d24";
    stylePrice.fontWeight = "600";
  } else {
    styleDiscount.display = "none";
  }

  return (
    <div className={styles["card"]}>
      <img
        src={product.pictures}
        className={styles["card-img-top"]}
        alt={product.name}
      />
      <div className={styles["card-body"]}>
        <div className={styles["card-price"]} style={stylePrice}>
          {product.price} &#8381;
          <span style={styleDiscount}>
            <FontAwesomeIcon icon={faTag} /> -{product.discount}%
          </span>
        </div>
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
