import React from 'react';

const pets = [
  {
    id: 1,
    name: 'Max',
    type: 'Perro',
    age: '2 años',
    description: 'Max es un perro juguetón y cariñoso que adora correr y jugar con la pelota.',
    image: 'https://images.unsplash.com/photo-1601758123927-21ad3684a882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHBldHN8ZW58MHx8fHwxNjI5NTI4NjY3&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 2,
    name: 'Mia',
    type: 'Gato',
    age: '1 año',
    description: 'Mia es una gata tranquila y amigable, perfecta para una familia que busca una mascota independiente.',
    image: 'https://images.unsplash.com/photo-1592194996308-f2817a3b299c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDZ8fGNhdHN8ZW58MHx8fHwxNjI5NTI4NjY3&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 3,
    name: 'Bella',
    type: 'Perro',
    age: '3 años',
    description: 'Bella es una perra dulce y leal que busca un hogar donde pueda recibir mucho amor y atención.',
    image: 'https://images.unsplash.com/photo-1551946581-a3792e4f78ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGRvZ3N8ZW58MHx8fHwxNjI5NTI4NjY3&ixlib=rb-1.2.1&q=80&w=400'
  }
];

const Pets = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Mascotas en Adopción</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{pet.name}</h2>
              <p className="text-gray-600 mb-4">{pet.type} - {pet.age}</p>
              <p className="text-gray-700">{pet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
