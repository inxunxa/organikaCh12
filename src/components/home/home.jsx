import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Organika</h1>
        <p className="lead">
          Here you will find the best, fresher and fancier food. Lorem ipsum
          dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aperiam, hic.
        </p>
        <hr className="my-4"></hr>
        <p>Out fruit and vegetable are Lorem ipsum dolor sit.</p>
        <Link className="btn btn-primary btn-lg" to="/catalog" role="button">
          Check out the catalog
        </Link>
      </div>
    );
  }
}

export default Home;
