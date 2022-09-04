import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Notfound from "./pages/notFound/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='games' element={<Games />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
