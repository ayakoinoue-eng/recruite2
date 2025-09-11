import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import BusinessIntroduction from './components/BusinessIntroduction';
import StaffVoices from './components/StaffVoices';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <BusinessIntroduction />
      <StaffVoices />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

export default App;