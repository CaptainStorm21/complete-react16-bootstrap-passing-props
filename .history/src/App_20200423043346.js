import React from "react";
import Main from "./components/Main";
import ContanerCard from "./components/ContainerCard";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <div classNameName="container-fluid py-3">
        <div className="container">
          <Main />
        </div>
        <div className="container-fluid">
          <div className="row">
            <ContanerCard />
            <ContanerCard />
            <ContanerCard />
            <ContanerCard />
            <ContanerCard />
            <ContanerCard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
