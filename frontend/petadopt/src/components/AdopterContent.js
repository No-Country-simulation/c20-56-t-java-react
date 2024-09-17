import Header from './Header';
import Carousel from './Carousel';
import ContactForm from './ContactForm';

const AdopterContent = () => (
    <><Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <section className="py-12 text-center bg-gray-100" id="about">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-4">¡Dale un Hogar a un Amigo!</h2>
                    <p className="text-gray-700 text-xl mb-6 max-w-2xl mx-auto">
                        ¿Estás buscando adoptar una mascota? ¡Regístrate como adoptante y
                        envía solicitudes para adoptar alguna de las mascotas que están
                        listadas! Luego, solo tienes que esperar a que un refugio se comunique
                        contigo.
                    </p>
                    <p className="text-gray-700 text-xl mb-6 max-w-2xl mx-auto">
                        ¿Tienes un refugio de mascotas? <a href="/shelter/register" className="text-blue-500 hover:underline">
                            Registra tu refugio
                        </a> hoy y comienza a publicar
                        las mascotas que tienes en adopción para que encuentren un hogar
                        amoroso.
                    </p>
                </div>
            </section>
        </div>
        <Carousel />
        <ContactForm /></>
);

export default AdopterContent;
