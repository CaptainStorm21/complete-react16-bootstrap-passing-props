import React from "react";
import Main from "./components/Main";
import ContanerCard from "./components/ContainerCard";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <div classNameName="container-fluid">
        <div className="col-lg-12 py-3">
          <Main />
        </div>
        <div className="container-fluid">
          <div className="row">
            <ContanerCard author = "Alexandre Dumas"  title="" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
