import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <>
 <div className="container">
      <div className="navbar-header">
        <button type="button"  className="navbar-toggle btn btn-primary" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span className="navbar-toggler-icon">icon</span>

        </button>
        <a href="#/" className="navbar-brand"><h2>Hello</h2></a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">

        <ul className="nav navbar-nav navbar-right">
          <li>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          </li>
        </ul>
      </div>
    </div>
  </>
)
}

export default Navbar;
