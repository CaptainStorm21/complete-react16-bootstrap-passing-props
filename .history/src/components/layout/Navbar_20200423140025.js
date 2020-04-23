import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <>
 <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="#/" class="navbar-brand">Hello</a>
      </div>
      <div class="collapse navbar-collapse navbar-ex1-collapse">

        <ul class="nav navbar-nav navbar-right">
          <li>
            <div class="btn-group navbar-btn" role="group" aria-label="...">
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modalLogin">Se connecter</button>
              <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modalSignin">Créer un compte</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
)
}

export default Navbar;
