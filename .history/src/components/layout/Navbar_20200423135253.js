import React from "react";

function Navbar() {
  return <>
    <div class="container text-center">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Title</a>
        </div>
        <div id="navbar" class="navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
  </>;
}

export default Navbar;
