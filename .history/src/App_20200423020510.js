import React from "react";
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
