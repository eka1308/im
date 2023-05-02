import styles from "./cardlist.module.css";
import "./cardlist.module.css";
import { useEffect, useState } from "react";
import { CardItem } from "../carditem";
import { TOKEN } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

export const CardList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) navigate("/signin");
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    const fetchDataProducts = async () => {
      const res = await fetch("https://api.react-learning.ru/products", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        const responce = await res.json();
        setProducts(responce.products);
        console.log(products)
      } else {
        const responce = await res.json();
        console.log(responce.message);
      }
    };
    fetchDataProducts();
  }, []);

  
  // if (products>0) {products.sort((a,b) => a.likes.length-b.likes.length )} популярные продукты???
 
 

  return (
    <>
      <div className={styles["total"]}> Всего товаров: {products.length} </div>
      <div className={styles["cardlist"]}>
        {products.map((product) => {
          return <CardItem key={product["_id"]} product={product} />;
        })}
      </div>
    </>
  );
};
