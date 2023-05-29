import styles from "./cardlist.module.css";
import "./cardlist.module.css";
import { fetchProductsWithSearch } from "../../api/products";
import { CardItem } from "../CardItem";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth"
import { useSelector } from "react-redux"

export const CardList = () => {

  
  const { token } = useAuth()
  const { search } = useSelector(state => state.filter)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getAllProducts', search],
    queryFn: async () => {
      const res = await fetchProductsWithSearch(token, search)
      const responce = await res.json()

      return responce;
    },
    initialData: [],
    enabled: !!token
  })

  if (isLoading) return <p>Идет загрузка:</p>

  if (isError) return <p>Произошла ошибка: {error}</p>
 

  return (
    <>
     {token && <>
      <div className={styles["total"]}> Всего товаров: {data.length} </div>
      <div className={styles["cardlist"]}>
        {data.map((product) => {
          return <CardItem key={product._id} product={product} />;
        })}
      </div>
       </>
       }
    </>
  );
};
