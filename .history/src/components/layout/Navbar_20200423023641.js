import React from "react";

function Navbar() {
  return (
    <ul class="nav navbar-nav">
    <li class="active"><a href="#">Home</a></li>
    <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
      <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#">Page 1-1</a></li>
        <li><a href="#">Page 1-2</a></li>
        <li><a href="#">Page 1-3</a></li>
      </ul>
    </li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3</a></li>
  </ul>
  );
}

export default Navbar;
