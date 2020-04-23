import React from "react";
import Main from "./components/Main";
import Main from "./components/Main";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid py-3">
        <Main />
        <ContainerCard/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
