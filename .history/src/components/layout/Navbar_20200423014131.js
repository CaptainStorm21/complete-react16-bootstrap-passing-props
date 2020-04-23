import React from "react";

function Navbar() {
  return (
      <div className="navbar  bg-dark">
        <div className = "container">
        <div className="navbar-header">
          <h2 className="title">React Strap</h2>
        </div>
        <div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
  );
}

export default Navbar;
