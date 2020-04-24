import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
              <Navbar currentPage='home' />
    </nav>
  );
}

export default Header;

