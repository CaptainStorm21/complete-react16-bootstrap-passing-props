import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <>

<NavbarBrand href="/">
            React Bootstrap Example
          </NavbarBrand>
          <Nav className="ml-auto" navbar>

            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Home</NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Tutorial
              </NavLink>
            </NavItem>


          </Nav>
  </>
)
}

export default Navbar;
