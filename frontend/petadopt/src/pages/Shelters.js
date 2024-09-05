import React from 'react';

const Shelters = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Refugios</h1>
      <p className="text-gray-700 mb-6">Lista de refugios disponibles:</p>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Refugio 1</h2>
          <p className="text-gray-600">Descripción del refugio 1.</p>
        </li>
        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Refugio 2</h2>
          <p className="text-gray-600">Descripción del refugio 2.</p>
        </li>
        <li className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Refugio 3</h2>
          <p className="text-gray-600">Descripción del refugio 3.</p>
        </li>
      </ul>
    </div>
  );
};

export default Shelters;
