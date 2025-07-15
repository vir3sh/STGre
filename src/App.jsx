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
import Events from "./pages/Events";
import Secondary from "./pages/Events/Secondary";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
// import Primary from "./pages/Events/Primary";
// import PreSchool from "./pages/Events/PreSchool";
// import Cisce from "./pages/Events/Cisce";
// import Panvel from "./pages/Events/Panvel";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/principal-Message" element={<PrincipalMessage />} />
          <Route path="/about/accreditation" element={<Accreditation />} />
          <Route path="/about/flag-crest-motto" element={<FlagCrest />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/event-gallery" element={<Events />} />
          {/* <Route path="/event/preschool" element={<PreSchool />} />
          <Route
            path="/event/cisce-basketball-tournament-2024"
            element={<Cisce />}
          />
          <Route path="/event/panvel-inauguration" element={<Panvel />} />
          <Route path="/event/primary" element={<Primary />} /> */}
          <Route path="/events/secondary" element={<Secondary />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/academics" element={<Academics />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
