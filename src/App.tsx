import React from 'react';
import Header from './components/Header';   // ← 追加
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import BusinessIntroduction from './components/BusinessIntroduction';
import StaffVoices from './components/StaffVoices';
import RecruitmentRequirements from './components/RecruitmentRequirements';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div> {/* pt-20 を削除 */}
        <Hero />
        <AboutUs />
        <BusinessIntroduction />
        <StaffVoices />
        <RecruitmentRequirements />
        <ApplicationForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;