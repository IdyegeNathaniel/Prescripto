import { NavLink } from "react-router-dom";
import Logo from "../assets/assets_frontend/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-5 py-4 border-b border-[#ADADAD]">
      <NavLink to={"/"}>
        <img src={Logo} alt="logo" className="w-44" />
      </NavLink>
      <ul className="hidden md:flex gap-5 items-start">
        {["HOME", "DOCTORS", "ABOUT", "CONTACT"].map((item, index) => (
          <NavLink to={index === 0 ? "/" : `/${item.toLowerCase()}`}>
            <li key={index} className="font-semibold text-sm py-1">
              {item} <hr className="hidden bg-primary w-3/5 m-auto h-0.5" />
            </li>
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button className="hidden md:block px-8 py-3 bg-primary text-white rounded-full font-light">
          Create Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
