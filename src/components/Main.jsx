import { Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "../pages/Accueil";
import Prestations from "../pages/Prestations";
import Contact from "../pages/Contact";
import Photos from "../pages/Photos";
import Apropos from "../pages/Apropos";

export default function Main() {
  return (
    <main className="mainContainer">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </main>
  );
}
