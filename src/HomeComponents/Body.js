import React from "react";

import "../Home.css"; // Import the CSS file


import HeroSection from "../HomeComponents/HeroSection";
import SearchBar from "../HomeComponents/SearchBar";
import ServicesSection from "../HomeComponents/ServicesSection";
import WhyChooseUs from "../HomeComponents/WhyChooseUs";
import Testimonials from "../HomeComponents/Testimonials";
import FAQ from "../HomeComponents/FAQ";


const Body = () => {
  return (
    <div className="container">
      <HeroSection />
      <SearchBar />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQ/> 
    </div>
   
  );
};

export default Body;
