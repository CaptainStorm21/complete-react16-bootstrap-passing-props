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
            <ContanerCard author = "Alexandre Dumas"  title="Black Tullp"  descripton="The story begins with a historical event—the 1672 lynching of the Dutch Grand Pensionary (roughly equivalent to a modern Prime Minister) Johan de Witt and his brother Cornelis, by a wild mob of their own countrymen—considered by many as one of the most painful episodes in Dutch history, described by Dumas with a dramatic intensity." />
            <ContanerCard author = "Alexandre Dumas"  title="The Count of Monte Cristo"  descripton="The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. It is one of the author's more popular works, along with The Three Musketeers. Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet." />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
