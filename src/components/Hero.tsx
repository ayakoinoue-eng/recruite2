import React from 'react';
import { ChevronDown } from 'lucide-react';

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
    style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)' }}
  ></div>

  {/* 軽いオーバーレイ */}
  <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

    {/* メインテキストコンテンツ */}
    <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-12 leading-tight">
        <span className="text-black bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg inline-block mb-4 border-4 border-white">
          共感から始まる
        </span>
        <br />
        <span className="text-black bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg inline-block border-4 border-white">
          挑戦の物語
        </span>
      </h1>
      
      <button
        onClick={scrollToApplication}
        className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-8"
      >
        エントリーはこちら
      </button>
    </div>

    {/* サブテキスト */}
    <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 transform -translate-x-1/2 text-center z-20">
      <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-white text-shadow max-w-3xl mx-auto px-4">
        ～あなたのおもいを<br className="sm:hidden" />
        そのまま生かせる場所～
      </p>
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