import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatWeDo from "../components/WhatWeDo";
import MoreServices from "../components/MoreServices";
import LetsTalk from "../components/LetsTalk";
import Footer from "../components/Footer";
import ProfitAuditSteps from "../components/ProfitAuditSteps";
import ROIGuarentee from "../components/ROIGuarentee";
import Testimonials from "../components/Testimonials";
import Numbers from "../components/Numbers";
import Referrals from "../components/Referrals";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <MoreServices />
      <ProfitAuditSteps />
      <ROIGuarentee />
      <Testimonials />
      <Numbers />
      <Referrals />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default HomePage;


