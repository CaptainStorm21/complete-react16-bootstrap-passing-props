import React from "react";
import Main from './components/Main'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
       <Header/>
       <div className = "container-fluid py-5">
      <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
