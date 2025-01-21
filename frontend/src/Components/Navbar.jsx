import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { assets } from "../assets/assets";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navigate = useNavigate();

  const pStyle = "hover:text-black";
  return (
    <nav className="flex justify-between items-center mb-5 py-4 border-b border-[#ADADAD]">
      <NavLink to={"/"}>
        <img src={Logo} alt="logo" className="w-44" />
      </NavLink>
      <ul className="hidden md:flex gap-5 items-start">
        {["HOME", "ALL DOCTORS", "ABOUT", "CONTACT"].map((item, index) => (
          <NavLink
            key={index}
            to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
          >
            <li className="font-semibold text-sm py-1">
              {item} <hr className="hidden bg-primary w-3/5 m-auto h-0.5" />
            </li>
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <FaChevronDown />
            <div className="top-0 right-0 absolute pt-14 text-base text-gray-600 z-20 hidden group-hover:block">
              <div className="bg-stone-100 min-w-40 flex flex-col rounded gap-4 py-4 px-3">
                <p onClick={() => navigate("my-profile")} className={pStyle}>
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointment")}
                  className={pStyle}
                >
                  My Appointment
                </p>
                <p onClick={() => setToken(false)} className={pStyle}>
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block px-8 py-3 bg-primary text-white rounded-full font-light"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setMenu(true)}
          src={assets.menu_icon}
          className="w-6 md:hidden"
          alt="image"
        />
        {/* MOBILE MENU */}
        <div
          className={`${
            menu ? "fixed w-full" : "w-0 h-0"
          } md:hidden right-0 top-0 bottom-0 overflow-hidden z-20 bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul>
            <NavLink>HOME</NavLink>
            <NavLink>ALL DOCTORS</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>CONTACT</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
