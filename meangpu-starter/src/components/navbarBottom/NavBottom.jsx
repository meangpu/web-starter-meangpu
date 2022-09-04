import React from "react";
import NavItem from "./NavItem";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { FaGamepad } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import "./NavBottom.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  function getClassActive(checkWord) {
    return activeNav === checkWord ? "active" : "";
  }
  return (
    <nav className='about-nav'>
      {/* Do update this */}
      <NavItem
        checkName=''
        setFunction={setActiveNav}
        getClassFunction={getClassActive}
        icon={<FaHome />}
      />
      <NavItem
        checkName='About'
        setFunction={setActiveNav}
        getClassFunction={getClassActive}
        icon={<FaUserAlt />}
      />
      <NavItem
        checkName='Experience'
        setFunction={setActiveNav}
        getClassFunction={getClassActive}
        icon={<ImBook />}
      />
      <NavItem
        checkName='Portfolio'
        setFunction={setActiveNav}
        getClassFunction={getClassActive}
        icon={<FaGamepad />}
      />
    </nav>
  );
};

export default Nav;
