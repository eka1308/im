import styles from './cardlist.module.css';
import './cardlist.module.css';
import { useEffect, useState } from "react";
import { CardItem } from "../carditem";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI4ZTYiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.A0wO7zl55aLAZ8tM306Z57FRREgU5nx9gM9bkP1bHDE';


export const CardList = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchDataProducts = async () => {
          const res = await fetch('https://api.react-learning.ru/products', {
            headers: {
              Authorization: 'Bearer ' + TOKEN
            }
          })
    
     
          if (res.ok) {
            const responce = await res.json();
            console.log(responce);
            setProducts(responce.products);
            
          } else {
            const responce = await res.json();
            console.log(responce.message);
          }
    
          
        }
        fetchDataProducts()
      }, [])   

      // console.log(products)
      
   
      return (
      <>  
        <div className={styles['total']}> Всего товаров: {products.length} </div>
        <div className={styles['cardlist']}>
            { 
                 products.map((product)=>{
                return (<CardItem key={product['_id']}  product={product} />)
            })}
        </div>
      </>
    )

}