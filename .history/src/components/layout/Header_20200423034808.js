import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
<div className="position-fixed fixed-top">
 <nav className="bg-dark py-1">
      <h2 className="title"> React Reboot </h2>
      <Navbar />
    </nav>
    </div>
  );
}

export default Header;
