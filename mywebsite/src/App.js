import React from "react";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <>
    <div className="box-border m-0 p-0 w-full h-full">

    
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
