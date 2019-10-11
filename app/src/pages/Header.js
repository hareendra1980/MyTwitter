import React from "react";
import Home from "./Home";
import Favor from "./Favor";

import "../Styles/atomicComponents/button.css";
import "../Styles/pages/header.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <Router>
        <div >
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div >My Twitter</div>

            <div  id="navbarSupportedContent">
              <ul >
                <li class="nav-item active">
                  <div class="nav-link">
                    <Link to="/">Home</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link">
                    <Link to="/seeall">View All</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link">
                    <Link to="/favourite">Favourites</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favourite" component={Favor} />
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
