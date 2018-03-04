import React, {Component} from "react";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import "./Footer.css";
const Footer = props => {
    return (
            <div>
            <footer className="page-footer" style={{'padding':'20px'}}>
                  <p> © 2018
       
               Created by:  <a className="footerlink" href="https://github.com/Komorebi-Girl">Stacy Jean-Philippe</a>, <a className="footerlink" href="#!">Priya Polla</a>, <a className="footerlink" href="#!">Kevin Hwang</a> & <a className="footerlink" href="https://github.com/elrizal">Erin Rizal</a>
        </p>
          </footer>
          </div>
    );
}
export default Footer;