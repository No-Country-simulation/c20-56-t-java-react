import React from 'react';

const About = () => {
  return (
    <><header className="relative bg-blue-600 text-white z-0"> {/* Añade z-0 para dar un z-index bajo */}
      <img
        src="/images/banner6.jpg"
        alt="Banner"
        className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Acerca de Nosotros</h1>
      </div>
    </header>
    <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-4xl font-bold mb-6 text-gray-800">Acerca de Nosotros</h1> */}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Nuestra Misión</h2>
          <p className="text-lg text-gray-600">
            Fomentar la adopción responsable al proporcionar un espacio donde los adoptantes puedan encontrar a su mascota ideal,
            y los refugios tengan la oportunidad de asegurarse de que sus animales sean adoptados por familias adecuadas.
            Creemos en la importancia de unir a las mascotas con hogares que les ofrezcan cuidado y amor a largo plazo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">¿Cómo Funciona?</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li><strong>Registro de Usuarios:</strong> Cualquier persona puede registrarse de forma gratuita y crear su perfil como adoptante o refugio.</li>
            <li><strong>Perfil de Adoptante:</strong> Los usuarios pueden explorar refugios y mascotas disponibles para adopción.</li>
            <li><strong>Registro de Refugios:</strong> Los refugios pueden listar las mascotas que tienen disponibles para adopción y gestionar las solicitudes.</li>
            <li><strong>Solicitud de Adopción:</strong> Los adoptantes envían solicitudes de adopción a través de la plataforma.</li>
            <li><strong>Comunicación entre Adoptante y Refugio:</strong> El refugio se pondrá en contacto con el adoptante para coordinar entrevistas y entregas o retiros de mascotas.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Nuestro Compromiso</h2>
          <p className="text-lg text-gray-600">
            Estamos comprometidos a garantizar que el proceso de adopción sea sencillo, seguro, y transparente.
            Trabajamos de la mano con refugios que cumplen con altos estándares de bienestar animal, y nos aseguramos de que
            cada paso del proceso esté orientado a encontrar el mejor hogar para cada mascota.
          </p>
        </section>
      </div></>
  );
};

export default About;
