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
        <Main />
        <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
        <ContanerCard/>
      </div></div>
      <Footer />
    </div>
  );
}

export default App;
