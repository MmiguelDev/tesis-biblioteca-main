import EditorialesForm from "../components/Formularios/EditorialesForm.jsx";
import AdminForm from "../components/Formularios/AdminForm.jsx";
import { useState } from "react";
import EditorialesList from "../components/Listados/EditorialsList.jsx";

export default function AgregarEditoriales() {
    /* Estado del formulario de autenticación */
    const [isAuthorized, setIsAuthorized] = useState(false);

    /* Estados para los datos del formulario */
    const [nombre, setNombre] = useState("");
    const [notificacion, setNotificacion] = useState("");
    const [error, setError] = useState("");

    /* Función para validar la clave del admin */
    const handleValidation = (clave) => {
        if (clave === "123456") {
            setIsAuthorized(true);
        } else {
            alert("Clave incorrecta");
        }
    };

    /* Función para enviar los datos */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construcción del objeto a enviar
        const nuevaEditorial = { nombre };

        try {
            const response = await fetch(
                "http://localhost:5000/api/add/editorial",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(nuevaEditorial),
                }
            );

            // Manejo de respuestas
            if (response.ok) {
                setNotificacion("true");
                setNombre(""); // Limpia el campo
            } else {
                const errorData = await response.json();
                setNotificacion("error");
                setError(errorData.message || "Error al guardar la editorial");
            }
        } catch (error) {
            console.error("Error al guardar la editorial:", error);
            setNotificacion("error");
            setError("No se pudo conectar al servidor.");
        }

        // Ocultar notificación después de 3 segundos
        setTimeout(() => setNotificacion(""), 3000);
    };

    return (
        <div>
            {/* Formulario de autenticación */}
            {!isAuthorized ? (
                <div>
                    <AdminForm onValidate={handleValidation} />
                </div>
            ) : (
                <div className="mt-24">
                    <EditorialesForm
                        handleSubmit={handleSubmit}
                        editorialSeleccionada={nombre}
                        setEditorialSeleccionada={setNombre}
                        notificacion={notificacion}
                        error={error}
                    />
                    <EditorialesList />
                </div>
            )}
        </div>
    );
}