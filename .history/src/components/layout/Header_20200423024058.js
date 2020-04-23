import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>

        <Navbar/>
        </div>    </div>
</nav>
  );
}

export default Header;
