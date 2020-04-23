import React from "react";

function Navbar() {
  return (
    <nav className="navbar-fixed-top">
        <a className="navbar-brand" href="#">
        <h3> Project name</h3> 
        </a>
        <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
    </nav>
  );
}

export default Navbar;
