import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pets = [
    { id: 1, image: '/images/1.webp' },
    { id: 2, image: '/images/2.webp' },
    { id: 3, image: '/images/3.jpg' },
    { id: 4, image: '/images/4.jpg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pets.length);
    }, 5000); // Intervalo de 5 segundos
    return () => clearInterval(interval);
  }, [pets.length]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 relative">
        <div className="relative h-[600px] overflow-hidden">
          {pets.map((pet, index) => (
            <div
              key={pet.id}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
                index === currentSlide ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{
                transition: 'transform 1s ease-in-out',
              }}
            >
              <img
                src={pet.image}
                alt={`Slide ${pet.id}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
