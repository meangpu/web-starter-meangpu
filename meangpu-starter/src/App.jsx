import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavbarBottom from "./components/navbarBottom/NavBottom";
import NavbarTop from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Notfound from "./pages/notFound/Notfound";
import About from "./pages/about/About";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarBottom />
      <NavbarTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
