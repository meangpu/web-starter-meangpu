import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { links } from "../../../data.json";
import { GoThreeBars } from "react-icons/go";
import "./Navbar.css";

const Navbar = () => {
  // const [isNavShowing, setIsNavShowing] = useState(true);
  return (
    <nav className='main-nav'>
      <div className='container nav__container'>
        <ul className='nav__links'>
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
        {/* <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          <GoThreeBars />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
