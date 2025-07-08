import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import PrincipalMessage from "./pages/PrincipalsMessage";
import Accreditation from "./pages/Accreditation";
import FlagCrest from "./pages/FlagCrest";
import FacilitiesPage from "./pages/FacilitySection";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="p-10">Home Page</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/principal-Message" element={<PrincipalMessage />} />
          <Route path="/about/accreditation" element={<Accreditation />} />
          <Route path="/about/flag-crest-motto" element={<FlagCrest />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
