import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>    
  </div>
  <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
      <li class="navbar-left"><a href="#">Left 1</a></li>
      <li class="navbar-left"><a href="#">Left 2</a></li>
      <li class="active"><a href="#">Center 1</a></li>
      <li><a href="#">Center 2</a></li>
      <li><a href="#">Center 3</a></li>
      <li class="navbar-right"><a href="#">Right 1</a></li>
      <li class="navbar-right"><a href="#">Right 2</a></li>
    </ul>
  </div>
)
}

export default Navbar;
