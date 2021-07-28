import React, { Component } from "react";
import PropTypes from "prop-types";
import {Card, CardHeader, CardBody} from 'reactstrap'

class BasicInformation extends Component {
  state = {};
  render() {
    return (
      <section className="basic_info">
      <Card className="dark_card_border">
          <CardHeader>
              <div className="main_title aacent_font">
                  Basic Information
              </div>
          </CardHeader>
        <CardBody>
          <ul className="info_list">
              <li className ="info_list--item accent_font">
                  Office Name: 
                  <span className="info_list--item__value">Some Office Name</span>
              </li>
              <li className ="info_list--item accent_font">
                  Office Name: 
                  <span className="info_list--item__value">Some Office Name</span>
              </li>
              <li className ="info_list--item accent_font">
                  Office Name: 
                  <span className="info_list--item__value">Some Office Name</span>
              </li>
          </ul>
        </CardBody>
      </Card>
      </section>
    );
  }
}

export default BasicInformation;
