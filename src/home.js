import React from "react";
import "./Home.css"; // Import the CSS file
import doctor from "./homedoctor.png";
import searchIcon from "./icons/search.svg";
import ai from "./icons/ai.svg";
import uparrow from "./icons/arrow-up-left.svg";
import finddoctor from "./icons/finddoctor.svg";
import lab from "./icons/lab.svg";
import medicence from "./icons/medicence.svg";
import ailogo from "./icons/ailogo.png";
import homesample from "./icons/homesample.svg";
import  doctorkit from "./icons/doctorkit.png";


function Home() {
  return (
    <div className="container">
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
          <img
            src={doctor}
            alt="Doctor"
            className="image" // Use className instead of style
          />
        </div>
      </div>

      <div className="search-container">
        <select className="doctor-dropdown">
          <option value="doctors">Doctors</option>
          <option value="dentists">Dentists</option>
          <option value="specialists">Specialists</option>
        </select>
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search the best doctor"
        />
      </div>

      <div className="services-container">
        <span style={{ color: "#49ADCA" }}>Services</span>
        <h1>Our Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <img
                src={ai}
                alt="AI"
                style={{ height: "80px", width: "80px", marginRight: "20px" }}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Get AI Medical Assistant
                </span>
                <p>
                  Assess your symptoms instantly with our AI Medical Assistant
                  and get personalized health recommendations, anytime,
                  anywhere.
                </p>
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
                marginTop: "24px",
              }}
            >
              <button className="get-started">
                Get Started{" "}
                <img src={uparrow} alt="AI" style={{ marginLeft: "12px" }} />
              </button>
            </div>
          </div>
          <div className="service-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <img
                src={finddoctor}
                alt="AI"
                style={{ height: "80px", width: "80px", marginRight: "20px" }}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Find a Doctor
                </span>
                <p>
                  Connect with top specialists for expert consultations,
                  available at your convenience. At your door steps{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
                marginTop: "24px",
              }}
            >
              <button className="get-started">
                Get Started{" "}
                <img src={uparrow} alt="AI" style={{ marginLeft: "12px" }} />
              </button>
            </div>
          </div>
          <div className="service-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <img
                src={lab}
                alt="AI"
                style={{ height: "80px", width: "80px", marginRight: "20px" }}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Lab Test Booking
                </span>
                <p>
                  Book lab tests online with home sample collection for your
                  convenience. Get fast and reliable results delivered directly
                  to you.
                </p>
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
                marginTop: "24px",
              }}
            >
              <button className="get-started">
                Get Started{" "}
                <img src={uparrow} alt="AI" style={{ marginLeft: "12px" }} />
              </button>
            </div>
          </div>

          <div className="service-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <img
                src={medicence}
                alt="AI"
                style={{ height: "80px", width: "80px", marginRight: "20px" }}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Order Medicines
                </span>
                <p>
                  Order your medicines online and enjoy fast, hassle-free
                  delivery. Stay stocked with essentials, right at your
                  doorstep.
                </p>
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
                marginTop: "24px",
              }}
            >
              <button className="get-started">
                Get Started{" "}
                <img src={uparrow} alt="AI" style={{ marginLeft: "12px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="why">
      <span style={{ color: "#49ADCA" }}>About</span>    
      <h1>Why You Choose Us</h1>
      <div className="cards-container">

        <div className="card">
        <img src={ailogo} alt="AI" />
       
          <h2>AI Doctor Recommendations</h2>
          <p>AI-powered recommendations to match you with the best specialists for your needs.</p>
        
          <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
          <button className="aboutarrow" style={{borderRadius:"30px"}}>
            <img src={uparrow}/>
          </button>
          </div>

        </div>

        <div className="card">
        <img src={homesample} alt="AI" />
       
          <h2>Home Sample Collection</h2>
          <p>Convenient lab test services with samples collected directly from your home.</p>
        
          <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
          <button className="aboutarrow" style={{borderRadius:"30px"}}>
            <img src={uparrow}/>
          </button>
          </div>

        </div>

        <div className="card">
        <img src={doctorkit} alt="AI" />
       
          <h2>Secure <br></br>Consultations</h2>
          <p>Private and encrypted online consultations to keep your health data secure.</p>
        
          <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
          <button className="aboutarrow" style={{borderRadius:"30px"}}>
            <img src={uparrow}/>
          </button>
          </div>

        </div>

       
     
      </div>
    </div>


    </div>
  );
}

export default Home;
