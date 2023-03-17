import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Education from "./components/Education/Education";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Skils from "./components/Skils/Skils";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
