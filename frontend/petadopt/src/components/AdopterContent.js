const AdopterContent = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenido, adoptante</h2>
        <p className="text-gray-600 text-center">Aquí puedes ver las mascotas disponibles para adopción.</p>
            <a href="/shelter/register" className="text-blue-500 hover:underline">
                Registrar refugio
            </a>
    </div>
);

export default AdopterContent;
