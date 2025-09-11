import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroBackground from "../assets/hero-background.png"; // パスは Hero.tsx の場所に合わせて調整

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToApplication = () => {
    const applicationSection = document.getElementById('application');
    applicationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <section className="relative w-full h-screen pt-16 flex items-center justify-center overflow-hidden">
  {/* 背景画像 */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-no-repeat sm:bg-top md:bg-center lg:bg-center xl:bg-center"
    style={{ backgroundImage: `url(${heroBackground})` }}
  ></div>

  {/* グレーのオーバーレイ */}
  <div className="absolute inset-0 bg-gray-800 bg-opacity-70 z-10"></div>

    {/* テキストコンテンツ */}
    <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto fade-in">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-shadow-lg">
        共感から始まる<br />
        <span className="text-red-500">挑戦の物語</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed text-shadow max-w-3xl mx-auto">
        あなたのおもいをそのままいかせる場所
      </p>
      <button
        onClick={scrollToApplication}
        className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
      >
        エントリーはこちら
      </button>
    </div>

    {/* 下矢印ボタン */}
    <button
      onClick={scrollToAbout}
      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-opacity animate-bounce z-20"
    >
      <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
    </button>
  </section>
);
};

export default Hero;