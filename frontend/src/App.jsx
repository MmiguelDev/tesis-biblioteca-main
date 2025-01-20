/* Bibliotecas */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Otros archivos */
import "./App.css";
import Layout from "./components/Navegacion/Layout.jsx";

/* Páginas */
import AgregarRegistros from "./pages/AñadirRegistroPage.jsx";
import AgregarLibros from "./pages/AñadirLibroPage.jsx";
import Home from "./pages/HomePage.jsx";
import Inventario from "./pages/InventarioPage.jsx";
import InventarioLibros from "./pages/InventarioLibrosPage.jsx";
import AgregarCategorias from "./pages/AñadirCategoriaPage.jsx";
import CategoriasPage from "./pages/CategoriasPage.jsx";
import AgregarEditoriales from "./pages/AñadirEditorialsPage.jsx";  // Nueva página
import EditorialesPage from "./pages/EditorialsPage.jsx";  // Nueva página

/*Inicio del documentado */
import Inicio from "./documentacion/Inicio.jsx";
import Documentacion from "./documentacion/Documentacion.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/agregar-registro" element={<AgregarRegistros />} />
        <Route path="/agregar-libro" element={<AgregarLibros />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/libros" element={<InventarioLibros />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/agregar-categorias" element={<AgregarCategorias />} />
        <Route path="/editoriales" element={<EditorialesPage />} />  {/* New route */}
        <Route path="/agregar-editoriales" element={<AgregarEditoriales/>} />  {/* Nueva ruta */}

        <Route path="/inicio" element={<Inicio />} />
        <Route path="/docs" element={<Documentacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
