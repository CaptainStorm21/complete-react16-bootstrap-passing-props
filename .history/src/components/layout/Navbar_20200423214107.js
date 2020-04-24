import React from "react";
import "./Nav.css";

function Navbar(props) {
  return (
    <>
          <a className="navbar-brand" href="#"><h4>ReactRebooted</h4></a>
  
    <div id = "navbar">
      <li className = {(props.currentPage === "ContainerCard")}><a href = "#">Home</a></li>

    </div>
    </>

  );
}

export default Navbar;
