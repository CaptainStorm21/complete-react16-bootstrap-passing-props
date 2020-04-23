import React from "react";

function Navbar() {
  return (

    <div className = "navbar-header">
    <button type = "button" className = "navbar-toggle" 
       data-toggle = "collapse" data-target = "#example-navbar-collapse">
       <span className = "sr-only">Toggle navigation</span>
       <span className = "icon-bar"></span>
       <span className = "icon-bar"></span>
       <span className = "icon-bar"></span>
    </button>
    <a className = "navbar-brand" href = "#">TutorialsPoint</a>
 </div>
 
 <div className = "collapse navbar-collapse" id = "example-navbar-collapse">

    <ul className = "nav navbar-nav">
       <li className = "active"><a href = "#">iOS</a></li>
       <li><a href = "#">SVN</a></li>
    
       <li className = "dropdown">
          <a href = "#" className = "dropdown-toggle" data-toggle = "dropdown">
             Java 
             <b className = "caret"></b>
          </a>
          
          <ul className = "dropdown-menu">
             <li><a href = "#">jmeter</a></li>
             <li><a href = "#">EJB</a></li>
             <li><a href = "#">Jasper Report</a></li>
             
             <li className = "divider"></li>
             <li><a href = "#">Separated link</a></li>
             
             <li className = "divider"></li>
             <li><a href = "#">One more separated link</a></li>
          </ul>
       </li>
    </ul>
 </div>
  );
}

export default Navbar;
