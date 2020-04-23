import React from "react";
import Navbar from './Navbar';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
              <div className="navbar-header">
          <h3>React Rebooted</h3>
        </div>
        <Navbar/>
    </nav>
  );
}

export default Header;
