import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Soil from './pages/Soil'
import Home from './pages/Home'
import Scheme from './pages/Scheme'
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soil-data" element={<Soil />} />
        <Route path="/scheme" element={<Scheme />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
