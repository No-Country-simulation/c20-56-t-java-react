import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-md">
          &copy; 2024 El ARCA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
