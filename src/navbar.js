import React, { createContext, useState } from 'react';
import './Navbar.css';
import searchIcon from './icons/search.svg'; // Path to search icon
import userIcon from './icons/usericon.png'; // Path to user icon
import cross from './icons/cross.png'; 

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="top-row">
                <div className="logo">MEDEASE</div>

                {/* Search bar for desktop */}
                <div className="search-bar">
                    <img src={searchIcon} alt="Search Icon" className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>

                <div className="login">
                    <img src={userIcon} alt="User Icon" className="usericon" />
                    <div className="login-text">
                        <span className="login-prompt">login or register</span>
                        <span className="account-type">Patient Account</span>
                    </div>
                </div>
            </div>

            <hr className="divider desktop-divider" />

            <div className="bottom-row">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Appointments</li>
                    <li>Find a Doctor</li>
                    <li>Talk to AI</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="mobile-nav">
                <div className="menu-logo">MEDEASE</div>
                <div className="hamburger" onClick={toggleMenu} style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    &#9776;
                </div>
            </div>
                 {/* Mobile Search Bar */}
                 <div className="search-bar-mobile">
                    <img src={searchIcon} alt="Search Icon" className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {/* Logo and Close Button in Mobile Menu */}
                <div className="mobile-menu-header">
                    <div className="menu-logo">MEDEASE</div>
                    <div className="close-btn-div" >
                    
                        <img src={cross}  alt='cross' onClick={closeMenu} />
                      

                    </div>
                    
                </div>

           
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Appointments</li>
                    <li>Find a Doctor</li>
                    <li>Talk to AI</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


