import AdminForm from "../components/Formularios/AdminForm.jsx";
import { useState, useEffect } from "react";
import RegistroForm from "../components/Formularios/RegistroForm.jsx";
import RegisterList from "../components/Listados/RegisterList.jsx";

export default function AgregarRegistros() {
  /* Estados para el formulario de admin */
  const [isAuthorized, setIsAuthorized] = useState(false);

  /* Estados para el formulario de registro */
  const [idAlumno, setIdAlumno] = useState("");
  const [idLibro, setIdLibro] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaTermino, setFechaTermino] = useState("");
  const [idEntregado, setIdEntregado] = useState("");

  /* Estados para los datos de la base de datos */
  const [alumnos, setAlumnos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [entregados, setEntregados] = useState([]);
  const [registros, setRegistros] = useState([]); // Estado para la lista de registros
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");

  /* Verificacion del formulario del admin */
  const handleValidation = (clave) => {
    if (clave === "123456") {
      setIsAuthorized(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  /* Obtener los datos para ponerlo en el dropmenu */
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const responseAlumnos = await fetch(
          "http://localhost:5000/api/get/alumnos"
        );
        const responseLibros = await fetch(
          "http://localhost:5000/api/get/libros"
        );
        const responseEntregados = await fetch(
          "http://localhost:5000/api/entregados/gets"
        );
        const responseRegistros = await fetch(
          "http://localhost:5000/api/registros"
        );

        if (
          !responseAlumnos.ok ||
          !responseLibros.ok ||
          !responseEntregados.ok ||
          !responseRegistros.ok
        ) {
          throw new Error("Error al obtener los datos");
        }

        const { result } = await responseAlumnos.json();
        setAlumnos(result);
        const { result: resultLibros } = await responseLibros.json();
        setLibros(resultLibros);
        const { result: resultEntregados } = await responseEntregados.json();
        setEntregados(resultEntregados);
        const { result: resultRegistros } = await responseRegistros.json();
        setRegistros(resultRegistros);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchApi();
  }, []);

  /* Guardar los datos en la base de datos */
  const guardarRegistro = async (e) => {
    e.preventDefault();
    const nuevoRegistro = {
      id_alumno: idAlumno,
      id_libro: idLibro,
      inicio: fechaInicio,
      fin: fechaTermino,
      id_entregado: idEntregado,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/registros/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoRegistro),
      });

      if (response.ok) {
        setNotification("true");

        // Obtener la lista actualizada de registros
        const responseRegistros = await fetch("http://localhost:5000/api/registros");
        const { result } = await responseRegistros.json();
        setRegistros(result); // Actualizar el estado de registros
      } else {
        setNotification("error");
      }
    } catch (error) {
      console.error("Error al guardar el registro:", error);
      setNotification("Error al guardar el registro.");
    } finally {
      setTimeout(() => setNotification(""), 3000); // Notificación desaparece después de 3 segundos
    }
  };

  return (
    <div>
      {!isAuthorized ? (
        <div>
          <AdminForm onValidate={handleValidation} />
        </div>
      ) : (
        <div className="mt-24">
          <RegistroForm
            idAlumno={idAlumno}
            idLibro={idLibro}
            idEntregado={idEntregado}
            setIdAlumno={setIdAlumno}
            setIdLibro={setIdLibro}
            setFechaInicio={setFechaInicio}
            setFechaTermino={setFechaTermino}
            setIdEntregado={setIdEntregado}
            alumnos={alumnos}
            libros={libros}
            entregados={entregados}
            guardarRegistro={guardarRegistro}
            notification={notification}
            error={error}
          />
          <RegisterList registros={registros} />
        </div>
      )}
    </div>
  );
}