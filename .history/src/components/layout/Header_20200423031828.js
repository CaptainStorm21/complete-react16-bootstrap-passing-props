import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
<div className="position-fixed fixed-bottom">
 <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
    <Navbar/>
  </div>
  </footer>
  </div>
  );
}

export default Header;
