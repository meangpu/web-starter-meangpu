import React from "react";

const NavItem = (props) => {
  return (
    <a
      href={`#${props.checkName}`}
      onClick={() => props.setFunction(props.checkName)}
      className={props.getClassFunction(props.checkName)}
    >
      {props.icon}
    </a>
  );
};

export default NavItem;
