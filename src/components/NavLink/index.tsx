import React from 'react';
import { NavLink as RouterLink } from "react-router-dom";

//Styles
import './styles.css'

//Types
type LinkProps = {
  rout: string,
}

const NavLink:React.FC<LinkProps> = ({ children , rout }) => {
  return (
    <>
		<RouterLink className="link" to={"/" + rout}>{ children }</RouterLink>
    </>
  );
}

export default NavLink;
