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
import LoginPage from "/Users/erinrizal/class/CookWithNana/src/pages/LoginPage";

const NavBar = props => (
	<div>
		<Hamburger />
			<nav class="navbar navbar-expand-lg navbar-light bg-light">

	  <a class="navbar-brand" href="/">Cook With Nana</a> 
		<button class="btn " type="submit" exact path="/login" component={LoginPage} >LOG IN</button>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">

	    <form class="form-inline my-2 my-lg-0">
	      <input class="form-control mr-sm-2" type="search" placeholder="Search for appointments" aria-label="Search"></input>
	      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">GO</button>
	    </form>
	
	  </div>
	</nav>
	</div>
);

export default NavBar;

// import React from "react";
// import "./NavBar.css";

// const NavBar = props => (
// 	<nav class="navbar navbar-expand-lg navbar-light bg-light">
// 	  <a class="navbar-brand" href="#">Cook With Nana</a>
// 	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 	    <span class="navbar-toggler-icon"></span>
// 	  </button>

// 	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
// 	    <ul class="navbar-nav mr-auto">
// 	      <li class="nav-item active">
// 	        <a class="nav-link" href="#">Profile <span class="sr-only">(current)</span></a>
// 	      </li>
// 	      <li class="nav-item">
// 	        <a class="nav-link" href="#">My Schedule</a>
// 	      </li>
	      
// 	    </ul>
// 	    <form class="form-inline my-2 my-lg-0">
// 	      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
// 	      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// 	    </form>
// 	  </div>
// 	</nav>
// );

// export default NavBar;