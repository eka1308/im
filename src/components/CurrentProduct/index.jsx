import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { currentProductFetch } from "../../api/currentproduct";
import styles from "./currentProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth"

export const CurrentProduct = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getCurrentProduct', params, token],
    queryFn: async () => {
      const res = await currentProductFetch(token, params.idOfProducts);
      const responce = await res.json()
      return responce;
      
    },
   
  })

  if (isLoading) return <p>Идет загрузка:</p>

  if (isError) return <p>Произошла ошибка: {error}</p>


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
          { data.discount > 0 ?  <div className={styles["card-price-discount"]} >{data.price} &#8381;
          <span className={styles["discount"]}>
            <FontAwesomeIcon icon={faTag} /> -{data.discount}%
          </span>
        </div> : 
         <div className={styles["card-price"]}>{data.price} &#8381;</div>}
          <div className={styles["card-wight"]}>{data.wight} </div>
          <div className={styles["card-wight"]}> Товар в избранном у {data.likes.length} человек</div>
          {/* <div className={styles["card-wight"]}>{data.reviews} </div> */}
          <div className={styles["btns"]}>
            <button className={styles["btn-primary"]} type="submit">
              В корзину
            </button>
            <button
              className={styles["btn-primary"]}
              onClick={() => navigate("/products")}
            >
              В каталог
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
