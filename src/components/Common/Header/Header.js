import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { NavLink} from "react-router-dom"
import Navigation from "../Navigation/Navigation"

class Header extends Component {
  state = {};
  render() {
    return (
     
        <header className="header">
        <Container>
            <Row>
              <Navigation/>
            </Row>
        </Container>
        </header>
    
    );
  }
}

export default Header;
