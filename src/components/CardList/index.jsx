import styles from "./cardlist.module.css";
import "./cardlist.module.css";
import { useEffect } from "react";
import { CardItem } from "../CardItem";
import { TOKEN } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query"
import { productsFetch } from "../../api/products"

export const CardList = () => {
  const navigate = useNavigate();
  
  const token = localStorage.getItem(TOKEN);

  useEffect(() => {
    if (!token) navigate("/signin");
  }, [navigate, token]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getAllProducts'],
    queryFn: async () => {
      const res = await productsFetch(token)
      const responce = await res.json()

      return responce;
    }
    // initialData: []
    // enabled: !!token
  })

  if (isLoading) return <p>Идет загрузка:</p>

  if (isError) return <p>Произошла ошибка: {error}</p>
 

  return (
    <>
      <div className={styles["total"]}> Всего товаров: {data.total} </div>
      <div className={styles["cardlist"]}>
        {data.products.map((product) => {
          return <CardItem key={product["_id"]} product={product} />;
        })}
      </div>
    </>
  );
};
