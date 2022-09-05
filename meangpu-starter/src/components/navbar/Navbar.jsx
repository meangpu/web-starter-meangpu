import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { links } from "../../../data.json";
import { GoThreeBars } from "react-icons/go";
import logo from "../../img/icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className='main-nav'>
      <div className='container nav__container'>
        <Link to='/' className='logo nav__links'>
          <img src={logo} alt='nav logo' />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className='nav__toggle-btn'
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          <GoThreeBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
