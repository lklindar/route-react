
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import Home from "./components/Home.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Gallery from "./components/Gallery.js"

function App() {
  return (
    <Router>
      <nav style={{ margin: 12 }}>
      <Link to="/" style={{ padding: 6 }}>
        Home
        </Link>
        <Link to="/about" style={{ padding: 6 }}>
          About
        </Link>
        <Link to="/contact" style={{ padding: 6 }}>
          Contact
        </Link>
        <Link to="/gallery" style={{ padding: 6 }}>
          Gallery
        </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </Router>
  );
}

export default App;
