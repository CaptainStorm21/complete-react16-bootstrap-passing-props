import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
