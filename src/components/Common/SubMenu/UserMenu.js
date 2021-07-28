import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Icofont from "react-icofont";
import axios from "./../../../services/axios";
import req from './../../../services/user_api'
import { object } from "prop-types";
import { array } from "prop-types";

class UserMenu extends Component {
  state = {};
  
  render() {
    const { user_name } = this.props.currentUserInfo;
    return (
      <Navbar light expand="md">
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret>
                {user_name}
              
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/profile" active>
                  Profile
                </DropdownItem>
                <DropdownItem tag="a" href="/blah" >
                  Office 
                </DropdownItem>
                <DropdownItem tag="a" href="/blah" >
                  Purches 
                </DropdownItem>
                <DropdownItem tag="a" href="/login" className="d-flex align-items-center justify-content-between" >
                  Exit 
                  <Icofont icon="logout"/>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
    );
  }
}
UserMenu.propTypes = {
  currentUserInfo: PropTypes.oneOfType([PropTypes.array,PropTypes.object ]).isRequired,
};
const mapStateToProps = (state) => {
  return {
    currentUserInfo: state.UserReducer.userInfo
  };
};
export default connect(mapStateToProps, null)(UserMenu);
