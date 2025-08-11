import React from 'react';
import '../css/PreNavbar.css';
import logo from '../images/book-open.svg';

const PreNavbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="prenavbar">
        <div className="prenavbar-container">
            <div className="prenavbar-logo" onClick={() => scrollTo('home')}>
                <img src={logo} className="logo-image" />
                <span>How Was Your Day?</span>
            </div>
            <div className="prenavbar-links">
                <button onClick={() => scrollTo('our-diary')}>Our Diary</button>
                <button onClick={() => scrollTo('about-us')}>About us</button>
                <a href="/login" className="login-button">Login / Sign up</a>
            </div>
        </div>
    </nav>

  );
};

export default PreNavbar;
