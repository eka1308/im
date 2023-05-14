import styles from "./cardlist.module.css";
import "./cardlist.module.css";
import { fetchProductsWithSearch } from "../../api/products";
import { useEffect } from "react";
import { CardItem } from "../CardItem";
import { TOKEN } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query"
import { productsFetch } from "../../api/products"
import { useAuth } from "../../hooks/useAuth"
import { useSelector } from "react-redux"

export const CardList = () => {
  const navigate = useNavigate();
  
  const { token } = useAuth()
  const { search } = useSelector(state => state.filter)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getAllProducts', search],
    queryFn: async () => {
      const res = await fetchProductsWithSearch(token, search)
      const responce = await res.json()

      return responce;
    },
    initialData: []
  })

  if (isLoading) return <p>Идет загрузка:</p>

  if (isError) return <p>Произошла ошибка: {error}</p>
 

  return (
    <>
      <div className={styles["total"]}> Всего товаров: {data.length} </div>
      <div className={styles["cardlist"]}>
        {data.map((product) => {
          return <CardItem key={product["_id"]} product={product} />;
        })}
      </div>
    </>
  );
};
