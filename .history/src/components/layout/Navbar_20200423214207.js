import React from "react";
import "./Nav.css";

function Navbar(props) {
  return (
    <>
          <a className="navbar-brand" href="#"><h4>ReactRebooted</h4></a>
  
    <div id = "navbar">
      <ul className = "nav navbar-nav">
      <li className = {(props.currentPage === "ContainerCard")}><a href = "#">Home</a></li>
      <li className = {(props.currentPage === "ContainerCard")}><a href = "#">Home</a></li>
      <li className = {(props.currentPage === "ContainerCard")}><a href = "#">Home</a></li>
    </ul>
    </div>
    </>

  );
}

export default Navbar;
