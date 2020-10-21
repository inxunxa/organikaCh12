import React from "react";
import './App.css';
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";

import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog/catalog";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="container">
        <Catalog></Catalog>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
