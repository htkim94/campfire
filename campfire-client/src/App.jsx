import React from "react";
import Home from "../src/components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Room from "./components/room/Room"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/room">
          <Room/>
        </Route>
      </div>
    </Router>
    </>
  );
}
