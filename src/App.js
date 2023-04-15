import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
// ===============================
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
// ===============================
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
