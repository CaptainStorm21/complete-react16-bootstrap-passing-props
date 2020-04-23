import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div class="container"> 
    <nav className="bg-dark py-3">
      <h2 className="title"> React Reboot </h2>
      <Navbar />
    </nav>
    </div>
  );
}

export default Header;
