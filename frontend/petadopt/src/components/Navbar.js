import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getJwt, switchRole } from '../services/roleService';

const decodedJwt = getJwt();
console.log(decodedJwt);

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const roles = decodedJwt ? decodedJwt.roles.filter(role => role !== "USER") : []; // Filtra los roles

  const handleRoleChange = async (role) => {
    await switchRole(role); // Llama a la función switchRole
    setDropdownOpen(false); // Cierra el dropdown
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="navbar-logo text-xl font-bold">
          <Link to="/">Mi Aplicación</Link>
        </div>
        <ul className="navbar-links flex space-x-6">
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
          <li className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-gray-300">
              Cambiar Rol
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
