import React from "react";
import './App.css';
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./components/catalog/catalog";
import Todo from "./components/todo/todo";
import Home from "./components/home/home";
import About from "./components/about/about";
import Cart from "./components/cart/cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <div className="container-fluid">  
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/todo" exact component={Todo}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/cart" exact component={Cart}></Route>
          </Switch>        
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}



export default App;
