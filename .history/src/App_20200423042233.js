import React from "react";
import Main from "./components/Main";
import ContanerCard from "./components/ContainerCard";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid py-3">
        <Main />
        <ContanerCar/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
