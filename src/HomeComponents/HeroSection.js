import React, { useState, useEffect } from "react";
import doctor from "../icons/homedoctor.png";
import doctor2 from "../icons/doctor2.png";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    // Mobile Layout
    <div className="main">
      <div>
   
        <h1 >
          
          Your One-Stop Solution for Medical Assistance.
        </h1>
        <p >
          AI-powered doctor recommendations, lab tests at your doorstep, and
          convenient online consultations.
        </p>
      </div>

      <div >
        <img src={doctor2} alt="Doctor" className="image-mobile" />
      </div>

      <div >
        <button className="primaryButton-mobile">Talk to AI</button>
        <button className="secondaryButton-mobile">Find a Doctor Now</button>
      </div>
     
    </div>
  ) : (
    // Desktop Layout
    <div className="main">
      <div className="content">
        <h1 className="heading">
          Your One-Stop Solution for Medical Assistance.
        </h1>
        <p className="subheading">
          AI-powered doctor recommendations, lab tests at your doorstep, and
          convenient online consultations.
        </p>
        <div className="buttons">
          <button className="primaryButton">Talk to AI</button>
          <button className="secondaryButton">Find a Doctor Now</button>
        </div>
      </div>

      <div className="imageContainer">
        <img src={doctor} alt="Doctor" className="image" />
      </div>
    </div>
  );
};

export default HeroSection;
