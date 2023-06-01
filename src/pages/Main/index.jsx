import styles from './main.module.css';
import './main.module.css';
import { CardList } from "../../components/CardList";

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

