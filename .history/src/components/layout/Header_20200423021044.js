import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <h1>
            ReactReload
          </h1>
        </div>
        <Navbar/>
      </div>
    </div>
  );
}

export default Header;
