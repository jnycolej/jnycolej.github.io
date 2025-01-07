//import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
