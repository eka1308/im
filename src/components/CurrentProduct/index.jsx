import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { currentProductFetch } from "../../api/currentproduct";
import styles from "./currentproduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { TOKEN } from "../../utils/constants";

export const CurrentProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.idOfProducts);
  const token = localStorage.getItem(TOKEN);

  useEffect(() => {
    
    if (!token) navigate("/signin");
  }, [navigate, token]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getCurrentProduct'],
    queryFn: async () => {
      const res = await currentProductFetch(token, params.idOfProducts);
      const responce = await res.json()
      return responce;
    }
    // initialData: []
    // enabled: !!token
  })

  if (isLoading) return <p>Идет загрузка:</p>

  if (isError) return <p>Произошла ошибка: {error}</p>

  const stylePrice = {};
  const styleDiscount = {
    paddingLeft: "15px",
    position: "absolute",
    right: "1px",
    fontSize: "2.7rem",
    fontWeight: "600",
  };

  if (data.discount > 0) {
    stylePrice.color = "#a72d24";
    stylePrice.fontWeight = "600";
  } else {
    styleDiscount.display = "none";
  }

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["card"]}>
        <img
          src={data.pictures}
          className={styles["card-img-top"]}
          alt={data.name}
        />
        <div className={styles["card-body"]}>
          <h2 className={styles["card-name"]}>{data.name}</h2>
          <div className={styles["card-price"]} style={stylePrice}>
            {data.price} &#8381;{" "}
            <span style={styleDiscount}>
              <FontAwesomeIcon icon={faTag} /> -{data.discount}%
            </span>
          </div>
          <div className={styles["card-wight"]}>{data.wight} </div>
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
