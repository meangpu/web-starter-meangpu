import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import logo from "../../assets/logo.png";
import React from "react";
import "./Navbar.css";
import { links } from "../../../NavLink.json";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className='main-nav'>
      <div className='container nav__container'>
        <Link to='/' className='logo ' onClick={() => setIsNavShowing(false)}>
          <img width='64' height='64' src={logo} alt='meangpu website' />
        </Link>
        <button
          aria-label='nav btn'
          className='nav__toggle-btn'
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing(false)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
