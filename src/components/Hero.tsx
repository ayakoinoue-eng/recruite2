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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 - レスポンシブ対応 */}
      <div className="absolute inset-0">
        {/* デスクトップ用背景 */}
        <div
          className="hidden md:block absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)' }}
        ></div>
        
        {/* タブレット用背景 */}
        <div
          className="hidden sm:block md:hidden absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1024&h=768&fit=crop)' }}
        ></div>
        
        {/* モバイル用背景 */}
        <div
          className="block sm:hidden absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=768&h=1024&fit=crop)' }}
        ></div>
      </div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-black/60 z-10"></div>
      {/* メインテキストコンテンツ */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto fade-in">
        <h1 className="font-bold mb-8 sm:mb-12 leading-tight">
          {/* モバイル用テキスト */}
          <div className="block sm:hidden">
            <span className="text-2xl xs:text-3xl text-white bg-black/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-2xl inline-block mb-4 border-2 border-white/20">
              共感から始まる
            </span>
            <br />
            <span className="text-2xl xs:text-3xl text-white bg-black/70 backdrop-blur-sm px-4 py-3 rounded-xl shadow-2xl inline-block border-2 border-white/20">
              挑戦の物語
            </span>
          </div>
          
          {/* タブレット・デスクトップ用テキスト */}
          <div className="hidden sm:block">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white bg-black/70 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl inline-block mb-6 border-2 border-white/20">
              共感から始まる
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white bg-black/70 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl inline-block border-2 border-white/20">
              挑戦の物語
            </span>
          </div>
        </h1>
        
        <button
          onClick={scrollToApplication}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-8 backdrop-blur-sm border border-white/20"
        >
          エントリーはこちら
        </button>
      </div>

      {/* サブテキスト */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 left-1/2 transform -translate-x-1/2 text-center z-20">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white text-shadow-lg max-w-4xl mx-auto px-4 bg-black/30 backdrop-blur-sm py-3 px-6 rounded-full border border-white/20">
          ～あなたのおもいを<br className="sm:hidden" />
          そのまま生かせる場所～
        </p>
      </div>

      {/* 下矢印ボタン */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-all duration-300 animate-bounce z-20 bg-black/30 backdrop-blur-sm p-2 rounded-full border border-white/20 hover:bg-black/50"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>
    </section>
  );
};

export default Hero;