import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
// import NavbarBottom from "./components/navbarBottom/NavBottom";
import NavbarTop from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Notfound from "./pages/notFound/Notfound";
import About from "./pages/about/About";
import Job from "./pages/job/Job";
import Contact from "./pages/contact/contact";

const App = () => {
  return (
    <BrowserRouter basename='/web-starter-meangpu/'>
      {/* <NavbarBottom /> */}
      <NavbarTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='job' element={<Job />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/404' element={<Notfound />} />
        <Route path='*' element={<Navigate replace to='/404' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
