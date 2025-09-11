import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-white shadow">
      <div className="text-red-600 font-bold text-xl">logo</div>
      <nav className="flex items-center space-x-6">
        <a href="#about" className="text-gray-700 hover:text-red-600">私たちについて</a>
        <a href="#business" className="text-gray-700 hover:text-red-600">事業紹介</a>
        <a href="#voices" className="text-gray-700 hover:text-red-600">先輩の声</a>
        <a
          href="#application"
          className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
        >
          応募はこちら
        </a>
      </nav>
    </header>
  );
}

export default Header;