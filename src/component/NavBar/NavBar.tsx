import { NavLink } from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  return (
    <div className="navContainer">
      <NavLink to="/">
        <a>Landing</a>
      </NavLink>

      <NavLink to="/skills">
        <a>Skills</a>
      </NavLink>
      <NavLink to="/projects">
        <a>Projects</a>
      </NavLink>
      <NavLink to="/contact">
        <a>Contact me</a>
      </NavLink>
    </div>
  );
};

export default NavBar;
