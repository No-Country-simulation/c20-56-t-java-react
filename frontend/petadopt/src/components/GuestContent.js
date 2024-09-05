const GuestContent = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenido, visitante</h2>
        <p className="text-gray-600 text-center">
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
);

export default GuestContent;
