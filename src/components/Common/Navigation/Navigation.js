import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import {Link} from "react-router-dom"
import logo from "./../../../assets/img/logosvg.svg";
import SubMenu from "../SubMenu/SubMenu";

class Navigation extends Component {
  state = {
    isOpen: false,
  };
  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar color="dark" dark expand="lg" className="py-0 ">
      <div className="logo_holder">
        <Link to="/home" className="p-0 brand_link" >
          <img src={logo} alt="logo" className="brand"></img>
        </Link>
      </div>
      <NavbarToggler onClick={this.toggleMenu} className="" />
      <Collapse isOpen={this.state.isOpen} navbar className="align-items-center justify-content-lg-between" >
        <Nav className="mr-auto cst_menu_padding" navbar >
          <NavItem >
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <div className="sub_menu">
        <SubMenu/>
        </div>
      </Collapse>
    </Navbar>
    );
  }
}

export default Navigation;
