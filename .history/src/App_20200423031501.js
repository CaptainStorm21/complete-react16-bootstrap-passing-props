import React from "react";

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
