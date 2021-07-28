import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import EditibleField from "../NoDepended/EditibleField";

class Users extends Component {
  state = {};
  render() {
    return (
      <Card className="dark_card_border">
        <CardHeader>
          <div className="main_title aacent_font">Users of you server</div>
        </CardHeader>
        <CardBody>
          {/* <ul className="info_list">
                <li className ="info_list--item accent_font ml-0"> 
                    <span className="info_list--item__value">Some Office Name</span>
                </li>
                
            </ul> */}
          <EditibleField
            eText="Some text"
            eName="some"
            eApi="test"
            eParamId="45"
            eLabel="Text Here"
            eModalLabel="Some Field"
            // isDeletable
            // hasLabel
            bg="rgb(0 0 0 / 14%)"
            // color = "#"
            pancil="#0e70fa"
          />
        </CardBody>
      </Card>
    );
  }
}

export default Users;
