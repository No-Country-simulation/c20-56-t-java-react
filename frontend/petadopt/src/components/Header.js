import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-blue-600 text-white z-0"> {/* Añade z-0 para dar un z-index bajo */}
      <img
        src="/images/banner4.jpg"
        alt="Banner"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-4xl font-bold">EL ARCA: adopción de mascotas</h1>
      </div>
    </header>
  );
};

export default Header;
