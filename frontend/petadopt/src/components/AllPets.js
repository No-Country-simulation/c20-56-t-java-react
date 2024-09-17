import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importar Link para la navegación
import { fetchAllPets } from '../services/petService';

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    const getPets = async () => {
      setLoading(true);
      try {
        const data = await fetchAllPets(token);
        console.log(data);
        setPets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPets();
  }, [token]);

  if (loading) {
    return <p className="text-center text-2xl">Cargando mascotas...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Mascotas en Adopción</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pets.map((pet) => (
          <div 
            key={pet.id} 
            className={`bg-white shadow-md rounded-lg overflow-hidden ${pet.isOnMyWishlist ? 'border-4 border-green-500' : ''}`}
          >
            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{pet.name}</h2>
              <p className="text-gray-700"><strong>Especie:</strong> {pet.species === 'DOG' ? 'Perro' : pet.species === 'CAT' ? 'Gato' : pet.species}</p>
              <p className="text-gray-700"><strong>Sexo:</strong> {pet.gender === 'MALE' ? 'Macho' : pet.gender === 'FEMALE' ? 'Hembra' : pet.gender}</p>
              <p className="text-gray-600"><strong>Edad:</strong> {pet.age} año/s</p>
              <p className="text-gray-700 mb-4"><strong>Tamaño:</strong> {pet.size === 'SMALL' ? 'Pequeño' : pet.size === 'MEDIUM' ? 'Mediano' : pet.size === 'LARGE' ? 'Grande' : pet.size}</p>

              {/* Enlace a la página de detalles de la mascota */}
              <Link to={`/pets/${pet.id}`} className="text-blue-500 hover:underline">
                Ver más detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPets;
