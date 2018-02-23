import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SearchPage from "./pages/SearchPage";
// import NoMatch from "./components/NoMatch";
import LoginPage from "./pages/LoginPage";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Section1 from "./components/Landing/Section1";
import Section2 from "./components/Landing/Section2";
import Col from 'react-bootstrap/lib/Col';
import Hamburger from './components/Landing/hamburger'
import { slide as Menu } from '../node_modules/react-burger-menu'

const App = () =>
    <div>
      {/* <div id="outer-container">
  <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
  <main id="page-wrap">
    .
    .
    .
  </main>
</div> */}
  
      <Hamburger />
      <NavBar />
      <Landing />
      <Section1 />
      <Section2 />
     
    </div>
    
export default App;


