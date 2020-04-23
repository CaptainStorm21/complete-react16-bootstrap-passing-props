import React from "react";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar navbar-expand-sm bg-dark">
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
