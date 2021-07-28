import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../Common/Header";
import { Container } from "reactstrap";
import Footer from "../Common/Footer";

class Layout extends Component {
  state = {};
  render() {
    return (
     
        <div id="layout-wrapper">
          <Container fluid>
            <Header />
          </Container>
          <Container>
            <div className="main-content">{this.props.children}</div>
          </Container>
          <Container fluid >
              <Footer/>
          </Container>
        </div>
   
    );
  }
}

export default Layout;
