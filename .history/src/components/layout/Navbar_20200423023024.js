import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
      >
        <span className="navbar-toggler-icon"></span>
      </button>{" "}
      <h2>
      <a className="page-header" color="" href="#">
        React Reboot
      </a></h2>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Link <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
            >
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">
                Action
              </a>{" "}
              <a className="dropdown-item" href="#">
                Another action
              </a>{" "}
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider"></div>{" "}
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ul className="navbar-nav ml-md-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Link <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>{" "}
              <a className="dropdown-item" href="#">
                Another action
              </a>{" "}
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider"></div>{" "}
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
