import "bootstrap/dist/css/bootstrap.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import React, { useState } from "react";
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
  DropdownItem
} from "reactstrap";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-inner mt-4 " light expand="md">
        <div className="container">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto " navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
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
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink href="/">
                  <AiOutlineFacebook />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  <AiOutlineInstagram />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  <AiOutlineTwitter />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
