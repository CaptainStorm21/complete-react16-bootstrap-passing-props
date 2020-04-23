import React from "react";

function Navbar() {
  return (
    <nav classNameName="navbar-fixed-top">
        <a classNameName="navbar-brand" href="#">
        <h3> Project name</h3> 

        <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="#">Active</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
    </nav>
  );
}

export default Navbar;
