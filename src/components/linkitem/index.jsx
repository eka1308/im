import { NavLink } from "react-router-dom";
import styles from "./linkitem.module.css";

export const LinkItem = ({ link }) => {

  return (
    <li className={styles["navigationlink"]}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={link.link}
      >
        {link.name}
      </NavLink>
    </li>
  );
};
