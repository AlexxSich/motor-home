import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigations.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkIsActive);
};

export default function Navigation() {
  return (
    <nav className={css.navContainer}>
      <ul className={css.navList}>
        <li className={css.navListItem}>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink to="/catalog" className={getLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
