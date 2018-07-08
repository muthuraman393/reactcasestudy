import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HeroesPage } from "../components/HeroesPage.js";
import  HeroesList  from "../components/HeroesList.js";
import Innerapp from "../components/Innerapp.js";
import Singlehero from "../components/Singlehero.js";


const navStyle = {
  margin: "20px 0px 35px 0px"
};

const Header = props => (
  <Router>
    <div className="container">
      <h1>{props.title}</h1>
      <nav style={navStyle}>
        <Link to="/home">Home</Link>
        <Link to="/HeroesPage">Heroes Dashboard</Link>
        <Link to="/HeroesList">Heroes List</Link>
      </nav>
      <Route path="/home" component={Innerapp} />
      <Route path="/HeroesPage" component={HeroesPage} />
      <Route path="/HeroesList" component={HeroesList} />
      <Route exact path={`/hero/:id`} component={Singlehero} />

    </div>
  </Router>
);

export default Header;
