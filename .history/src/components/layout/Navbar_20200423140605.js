import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <>
 <div className="container">
      <div className="navbar-header">
        <button type="button"  className="navbar-toggle btn btn-primary" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span className="navbar-toggler-icon"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="#/" className="navbar-brand"><h2>Hello</h2></a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">

        <ul className="nav navbar-nav navbar-right">
          <li>
            <div className="btn-group navbar-btn bg-primary" role="group" aria-label="...">
              <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modalLogin">Se connecter</button>
              <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modalSignin">Créer un compte</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </>
)
}

export default Navbar;
