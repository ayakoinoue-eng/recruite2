import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-white shadow">
      <div className="text-blue-600 font-bold text-xl">logo</div>
      <nav className="flex items-center space-x-6">
        <a href="#about" className="text-gray-700 hover:text-blue-600">私たちについて</a>
        <a href="#business" className="text-gray-700 hover:text-blue-600">事業紹介</a>
        <a href="#voices" className="text-gray-700 hover:text-blue-600">先輩の声</a>
        <a href="#requirements" className="text-gray-700 hover:text-blue-600">応募要項</a>
        <a
          href="#application"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          応募はこちら
        </a>
      </nav>
    </header>
  );
}

export default Header;