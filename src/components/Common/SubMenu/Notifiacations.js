import React, { Component } from "react";
import Icofont from "react-icofont";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
} from "reactstrap";
class Notifications extends Component {
  state = {};
  render() {
    return (
      <UncontrolledDropdown>
      <DropdownToggle className="noti_btn" caret >
        <Icofont icon="notification" className="icon icon__white"></Icofont>
      </DropdownToggle>
      <DropdownMenu className="notification__menu">
    
          <div className="notification notification__body">
            <div className="notification notification__title">
              Notificarion name
            </div>
            <div className="notification notification__footer d-flex align-items-center justify-content-end">
            <Button type="button" className="note_btn note_btn--show">Show more</Button>
            <Button type="button" className="note_btn note_btn--close">Close</Button>
            </div>
          </div>
    
      </DropdownMenu>
    </UncontrolledDropdown>
    );
  }
}

export default Notifications;
