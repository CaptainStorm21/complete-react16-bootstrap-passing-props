import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header fixed="top" bg="dark" >
        <h1 className="category category-absolute"> Bootstrap React</h1>
      </header>

      <footer  fixed="bottom" className="page-footer clear-filter">
        <p> this is a footer</p>
      </footer>
    </div>
  );
}

export default App;
