import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <nav className=" navbar navbar-default ">
      <nav className="navbar navbar-default navbar-fixed-top">
        <Navbar />
      </nav>
    </nav>
  );
}

export default Header;

