import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className=" navbar navbar-default container-fluid">
      <nav className="navbar navbar-default navbar-fixed-top">
        <Navbar />
      </nav>
    </div>
  );
}

export default Header;

