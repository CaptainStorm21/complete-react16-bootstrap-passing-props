import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <></
    <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>    
  </div>
  <div className="navbar-collapse collapse">
    <ul className="nav navbar-nav">
      <li className="navbar-left"><a href="#">Left 1</a></li>
      <li className="navbar-left"><a href="#">Left 2</a></li>
      <li className="active"><a href="#">Center 1</a></li>
      <li><a href="#">Center 2</a></li>
      <li><a href="#">Center 3</a></li>
      <li className="navbar-right"><a href="#">Right 1</a></li>
      <li className="navbar-right"><a href="#">Right 2</a></li>
    </ul>
  </div>
)
}

export default Navbar;
