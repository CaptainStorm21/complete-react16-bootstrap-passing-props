import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <nav className=" bg-info">
      <h2 className="title"> React Reboot </h2>
      <Navbar />
    </nav>
  );
}

export default Header;
