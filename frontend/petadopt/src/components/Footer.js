import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Enlaces de Navegación */}
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Inicio</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contacto</Link>
          </li>
        </ul>
        
        {/* Derechos Reservados */}
        <p className="text-gray-400 text-sm">
          &copy; 2024 Pet Match. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
