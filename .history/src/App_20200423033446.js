import React from "react";
import Main from './components/Main'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

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
