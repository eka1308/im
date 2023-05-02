import styles from './main.module.css';
import './main.module.css';
// import { useEffect } from "react";
import { CardList } from "../../components/cardlist";

// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI4ZTYiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.A0wO7zl55aLAZ8tM306Z57FRREgU5nx9gM9bkP1bHDE';

export const Main = () => {

      return (
        <main className={styles['main']}>
          <div className={styles['wrapper']} >
          <div className={styles['main__content']} >
            <CardList />
          </div> 
        </div> 
      </main>
      )
}

