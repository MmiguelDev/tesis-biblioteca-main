export default function Inicio() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Sección Principal */}
            <section className="flex-grow flex justify-center items-center text-center py-36 bg-gradient-to-r from-teal-400 to-blue-500 text-white">
                <div className="max-w-2xl px-4">
                    <h2 className="text-4xl font-semibold mb-6">
                        Bienvenido a la documentación de Tu Biblioteca Digital
                    </h2>
                    <p className="text-lg mb-8">
                        Descubre el detrás del desarrollo envolviendote de conocimiento
                        sobe esta web.
                    </p>
                    <a
                        href="/documentacion"
                        className="inline-block bg-white text-teal-500 py-3 px-10 rounded-full text-xl font-medium hover:bg-teal-100 transition-colors"
                    >
                        Comienzar
                    </a>
                </div>
            </section>
        </div>
    )
}