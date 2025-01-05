import { NavLink } from "react-router-dom";
import Logo from "../assets/assets_frontend/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <NavLink>
        <img src={Logo} alt="logo" className="w-3" />
      </NavLink>
      <ul className="sm:mx-[10%]">
        {["HOME", "ALL DOCTORS", "ABOUT", "CONTACT"].map((item, index) => (
          <li key={index}>
            {item} <hr />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
