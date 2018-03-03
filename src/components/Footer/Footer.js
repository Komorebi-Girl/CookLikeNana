import React, {Component} from "react";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

const Footer = props => {
    return (
        <div className="Container">
            <div className="Grid">
                <Row>
                <Col l={12}>
            <body class="Site">
             <header>blah</header>
             <main class="Site-content">myeh</main>
             <footer>THIS IS THE FOOTER</footer>
            </body>
            
                </Col>
                
                </Row>
                </div>
            </div>
    );
}
export default Footer;