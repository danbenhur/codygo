import { NavLink } from "react-router-dom";
import classes from "../css/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/browse-hotels">
              Browse Hotels
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/favorite-hotels">
              Favorite Hotels
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
