import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurPhilosophy from "../components/OurPhilosophy";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from './../components/Contact';
import Footer from "../components/Footer";


const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurPhilosophy />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;


