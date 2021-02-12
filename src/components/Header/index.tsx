import React from 'react';
import NavLink from '../NavLink'
import Burger from './../Burger'
import Logo from './../Logo'

//Styles
import './styles.css'

const Header:React.FC = () => {
  return (
    <header className="header">
		<div className="header__burger">
			<Burger />
		</div>
		<Logo />
		<div className="header__link">
			<NavLink rout="signein" >SigneIn</NavLink>
			<NavLink rout="signeup" >SigneUp</NavLink>
		</div>
    </header>
  );
}

export default Header;
