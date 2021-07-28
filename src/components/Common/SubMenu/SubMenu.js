import React, { Component } from "react";
import UserBlock from "./UserBlock";
import Notifiacations from "./Notifiacations";
import UserMenu from "./UserMenu";
class SubMenu extends Component {
  state = {};
  render() {
    return (
      <div className="sub_menu_content d-flex align-items-center">
          <Notifiacations />
          <UserBlock />
          <UserMenu />
        </div>
    );
  }
}

export default SubMenu;
