import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
<div className="position-top fixed-top">
 <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
    <Navbar/>
  </div>  </div>
  </footer>
  </div>
  );
}

export default Header;
