import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Home from "./components/Home";
import  Background from './images/pattern.png';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Switch,Route,} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div className="main">
      <Header />
      <div  style={{backgroundImage: `url(${Background})`}}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
           
          </Route>
          <Route path="/">
            <Home />
           
          </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}




