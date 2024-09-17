import Header from './Header';
import Carousel from './Carousel';
import ContactForm from './ContactForm';

const AdminContent = () => (
    <><Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <section className="py-12 text-center bg-gray-100" id="about">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-4">¡Dale un Hogar a un Amigo!</h2>
                    <p className="text-gray-700 text-xl mb-6 max-w-2xl mx-auto">
                        ¿Tienes un refugio de mascotas? Comienza a publicar
                        las mascotas que tienes en adopción para que encuentren un hogar
                        amoroso.
                    </p>
                    <p className="text-gray-700 text-xl mb-6 max-w-2xl mx-auto">
                        ¿Estás buscando adoptar una mascota? <a href="/adopter/register" className="text-blue-500 hover:underline">
                            Regístrate como adoptante
                        </a> y
                        envía solicitudes para adoptar alguna de las mascotas que están
                        listadas! Luego, solo tienes que esperar a que un refugio se comunique
                        contigo.
                    </p>
                </div>
            </section>
        </div>
        <Carousel />
        <ContactForm /></>
    // <div>
    //     <h2>Panel de administración</h2>
    //     <p>Aquí puedes gestionar el sistema y los usuarios.</p>
    //     {/* Funcionalidades para admins */}
    // </div>
);

export default AdminContent;
