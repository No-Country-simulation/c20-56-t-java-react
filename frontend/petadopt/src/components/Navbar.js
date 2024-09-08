import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onRoleChange, activeRole }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const roles = activeRole ? ['ADMIN', 'ADOPTER', 'SHELTER'] : []; // Opciones de roles

  const handleRoleChange = (role) => {
    onRoleChange(role); // Llama a la función que cambia el rol
    setDropdownOpen(false); // Cierra el dropdown
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="navbar-logo text-xl font-bold">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>

        {/* Links de navegación centrados en la vista de escritorio */}
        <ul className="hidden md:flex navbar-links space-x-6 justify-center flex-grow">
          <li>
            <Link to="/" className="hover:text-gray-300">Inicio</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">Acerca de</Link>
          </li>
          <li>
            <Link to="/shelters" className="hover:text-gray-300">Refugios</Link>
          </li>
          <li>
            <Link to="/pets" className="hover:text-gray-300">Mascotas</Link>
          </li>
        </ul>

        {/* Dropdown para cambiar el rol */}
        <div className="hidden md:block relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
          {dropdownOpen && (
            <ul className="absolute bg-gray-700 mt-2 rounded shadow-md">
              {roles.map(role => (
                <li key={role} className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => handleRoleChange(role)}>
                  {role}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="hover:text-gray-300 focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Links de navegación para la vista móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="space-y-2 px-4 pb-4 mt-2">
            <li>
              <Link to="/" className="block text-white hover:text-gray-300">Inicio</Link>
            </li>
            <li>
              <Link to="/about" className="block text-white hover:text-gray-300">Acerca de</Link>
            </li>
            <li>
              <Link to="/shelters" className="block text-white hover:text-gray-300">Refugios</Link>
            </li>
            <li>
              <Link to="/pets" className="block text-white hover:text-gray-300">Mascotas</Link>
            </li>
            {/* Dropdown para cambiar el rol en móvil */}
            <li>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mt-4">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
              {dropdownOpen && (
                <ul className="bg-gray-700 rounded mt-4">
                  {roles.map(role => (
                    <li key={role} className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => handleRoleChange(role)}>
                      {role}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
