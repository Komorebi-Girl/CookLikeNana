import React from "react";
import "./NavBar.css";
import Hamburger from '../Hamburger/Hamburger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SearchPage from "CookWithNana/src/pages/SearchPage";
// import NoMatch from "./components/NoMatch";
import NanaProfile from "../NanaProfile";
import NanaRegister from "../NanaRegister";
import UserRegister from "../UserRegister";
import UserProfile from "../UserProfile";
import LoginPage from "../../pages/LoginPage";
import {NavItem, Navbar, Nav, MenuItem} from "react-bootstrap";
import logo from "../Images/logo.png";

const NavBar = props => (
	<div id="navContainer">
<Hamburger />
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<img src={logo} style= {{'max-height': '85px', 'posistion': 'relative', 'padding': '2px'}} alt="Logo" />

		<a  style={{'margin-right': "90px"}} href="/login"> | LOGIN</a>
	  <div className="collapse navbar-collapse" id="navbarSupportedContent">

	 
	  </div>
	</nav> 
	<div>
		
	</div>
</div>
);

export default NavBar;
