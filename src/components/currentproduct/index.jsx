import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentProductFetch } from "../../api/currentproduct";
import styles from "./currentproduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { TOKEN } from "../../utils/constants";

export const CurrentProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.idOfProducts);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) navigate("/signin");
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    const fetchDataProduct = async () => {
      const res = await currentProductFetch(token, params.idOfProducts);

      if (res.ok) {
        const responce = await res.json();
        console.log(responce);
        setProduct(responce);
      } else {
        const responce = await res.json();
        console.log(responce.message);
      }
    };
    fetchDataProduct();
  }, []);

  const stylePrice = {};
  const styleDiscount = {
    paddingLeft: "15px",
    position: "absolute",
    right: "1px",
    fontSize: "2.7rem",
    fontWeight: "600",
  };

  if (product.discount > 0) {
    stylePrice.color = "#a72d24";
    stylePrice.fontWeight = "600";
  } else {
    styleDiscount.display = "none";
  }

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["card"]}>
        <img
          src={product.pictures}
          className={styles["card-img-top"]}
          alt={product.name}
        />
        <div className={styles["card-body"]}>
          <h2 className={styles["card-name"]}>{product.name}</h2>
          <div className={styles["card-price"]} style={stylePrice}>
            {product.price} &#8381;{" "}
            <span style={styleDiscount}>
              <FontAwesomeIcon icon={faTag} /> -{product.discount}%
            </span>
          </div>
          <div className={styles["card-wight"]}>{product.wight} </div>
          <div className={styles["wrapper-name"]}></div>

          <div className={styles["btns"]}>
            <button className={styles["btn-primary"]} type="submit">
              В корзину
            </button>
            <button
              className={styles["btn-primary"]}
              onClick={() => navigate("/products")}
            >
              Назад к списку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
