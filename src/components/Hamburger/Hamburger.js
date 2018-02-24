import React from "react";
import {bubble as Menu} from 'react-burger-menu'
import "./hamburger.css";
import Icon from 'react-icons-kit';
import { home, clock2, user } from 'react-icons-kit/icomoon';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

const Hamburger = props => {
    // const showSettings = (event) => {
    //     event.preventDefault();
    // }

    return (
        
<Menu>
    <div className="Grid">
    <div className="row">
         <Col xs={6}>
         {/* logo will go here */}
		     </Col> 
             <Col xs={6}>
            <nav className="nav">
    
            <Icon icon={home}/>   <a id="home" className="menu-item" href="/" >Home  </a>    
            <hr/>
            <Icon icon={user}/>   <a id="about" className="menu-item" href="/about">My Profile</a>
            <hr/>
            <Icon icon={clock2}/>   <a id="contact" className="menu-item" href="/contact">My Schedule</a>
            <hr/>
            {/* <a onClick={showSettings} className="menu-item--small" href="">Settings</a> */}
           </nav>
           </Col>
    </div>
    </div>
</Menu>
    );
}
export default Hamburger;