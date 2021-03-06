import React from "react";

function Navbar() {
  return <>
   <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>    
    <a class="navbar-brand" href="#">Brand</a>
  </div>
  <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
        <li><a href="#">Left</a></li>
        <li><a href="#about">Left</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#about">Right</a></li>
      <li><a href="#contact">Right</a></li>
    </ul>
  </div>
  </>;
}

export default Navbar;
