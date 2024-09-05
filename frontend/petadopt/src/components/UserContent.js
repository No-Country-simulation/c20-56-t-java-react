const UserContent = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenido, usuario registrado</h2>
    <p className="text-gray-600 text-center">
        Para acceder a más funcionalidades, por favor{" "}
        <a href="/adopter/register" className="text-blue-500 hover:underline">
            regístrate como adoptante
        </a>{" "}
        o{" "}
        <a href="/shelter/register" className="text-blue-500 hover:underline">
            registra tu refugio
        </a>.
    </p>
</div>
);

export default UserContent;
