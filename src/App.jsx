import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Qualities from "./components/Qualities/Qualities";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Services />
        <About />
        <Qualities />
        <Features />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
