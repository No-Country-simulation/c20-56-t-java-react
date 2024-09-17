import Header from './Header';
import Carousel from './Carousel';
import ContactForm from './ContactForm';

const GuestContent = () => (
    <><Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-4xl font-semibold mb-4">¡Dale un Hogar a un Amigo!</h2>
            <p className="text-gray-700 text-xl mb-6 max-w-2xl mx-auto">
                ¿Estás buscando adoptar una mascota? Regístrate como adoptante y
                envía solicitudes para adoptar alguna de las mascotas que están
                listadas! Luego, solo tienes que esperar a que un refugio se comunique
                contigo.
            </p>

            <p className="text-gray-700 text-xl mb-6 max-w-2xl mx-auto">
                ¿Tienes un refugio de mascotas? Registra tu refugio hoy y comienza a publicar
                las mascotas que tienes en adopción para que encuentren un hogar
                amoroso.
            </p>
            <p className="text-gray-700 text-xl mb-6 max-w-2xl mx-auto">
                Para acceder a todas las funcionalidades, por favor{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                    regístrate
                </a>{" "}
                o{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                    inicia sesión
                </a>.
            </p>
        </div>
        <Carousel />
        <ContactForm /></>
);

export default GuestContent;
