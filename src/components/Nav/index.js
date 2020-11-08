import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import css from "./nav.module.css";

function Nav() {
  return (
    <div>
      <Router>
        <nav className={css.nav}>
        <h1>Alexa-Jane Berry</h1>
          <ul>
          <li className={css.navItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={css.navItem}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={css.navItem}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        {/* <Route path="/" component={App} /> */}
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default Nav;
