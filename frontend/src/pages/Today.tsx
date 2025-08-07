import React from 'react';
import '../css/Today.css'
import Navbar from '../components/Navbar';

const Today: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="today-page">
        <div className="today-container">
          <h1>Welcome to Today</h1>
          <p>Here you can track your daily mood and activities.</p>
        </div>
      </section>
    </>
  );
}

export default Today;