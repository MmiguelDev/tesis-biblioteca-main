import { BsInfoCircle } from "react-icons/bs";
import HomePage from "../assets/homepage.png"
import Menu from "../assets/menu.png";
import Login from "../assets/Login.png";
import Registar from "../assets/registrar.png";
import Opciones from "../assets/opciones.png"
import Search from "../assets/search.png";
import Catalogo from "../assets/catalogo.png";

export default function Tutorial () {
    return (
        <div>
            <section className="p-10 bg-slate-300 text-center">
                <h1 className=" text-slate-900 text-xl font-bold" > Como utilizár "DB Biblioteca" </h1>
                <h2 className=" text-slate-850 text-lg font-semibold mt-6"> Paso 1: </h2>
                <li className=" text-slate-900 text-md m-7 text-wrap">
                    Comunicárse con el equipo de desarrollo por medio de 
                    <a href="#" className="underline text-teal-700"> Instagram</a>,
                    <a href="#" className="underline text-teal-700"> Twitter (X)</a> o
                    <a href="#" className="underline text-teal-700"> Facebook</a> para 
                     realizar la cotización y personalización de su Biblioteca virtual.
                </li>
                <img src={HomePage}
                    className="m-7 shadow-md"
                />

                <h2 className=" text-slate-850 text-lg font-semibold mt-6"> Paso 2: </h2>
                <li className=" text-slate-900 text-md m-7 text-wrap">
                    Después de realizar tu personalización recuerda cuales fueron las páginas de administrador seleccionadas
                    para después introducir la contraseña de inicio de seción previamente establecida.
                </li>
                <div className="flex justify-center items-center text-center">
                    <img src={Menu}
                        className="size-60 w-max m-5"
                    />
                    <img src={Login}
                        className="size-60 w-max m-5"
                    />
                </div>

                <h2 className=" text-slate-850 text-lg font-semibold mt-6"> Paso 3: </h2>
                <li className=" text-slate-900 text-md m-7 text-wrap">
                    A continuación, puedes llenar todos los campos para guardar todos tus registros dentro de 
                    la base de datos.
                </li>
                <div className="flex justify-center items-center text-center">
                    <img src={Registar}
                        className="m-7 shadow-md"
                    />
                </div>

                <h2 className=" text-slate-850 text-lg font-semibold mt-6"> Paso 4: </h2>
                <li className=" text-slate-900 text-md m-7 text-wrap">
                    Selecciona las opciones para editar el estado de la entrega o 
                    eliminar definitivamente el registro.
                </li>
                <div className="flex justify-center items-center text-center">
                    <img src={Opciones}
                        className="m-9 shadow-md"
                    />
                </div>

                <h2 className=" text-slate-850 text-lg font-semibold mt-6"> Paso 5: </h2>
                <li className=" text-slate-900 text-md m-7 text-wrap">
                    Ahora que tienes registros en tu base de datos puedes buscar tus libros
                    por medio de su autor, categoria o editorial de una forma sencilla.
                </li>
                <div className="flex justify-center items-center text-center">
                    <img src={Search}
                        className="m-7 shadow-md"
                    />
                </div>

                <h2 className=" text-slate-850 text-lg font-semibold mt-6"> Paso 6: </h2>
                <li className=" text-slate-900 text-md m-7 text-wrap">
                    O bien, puedes ver los catalogos que se muestran en tus páginas de usuario
                    previemente establecidas por los administradores durante la personalización 
                    de tu web. 
                </li>
                <div className="flex justify-center items-center text-center">
                    <img src={Catalogo}
                        className="m-7 shadow-md"
                    />
                </div>

                <p className="italic text-slate-500 flex justify-center items-center gap-2 text-md">
                    <BsInfoCircle className="inline"/> 
                    Ésta página puede contener información ficticia con fines educativos.
                </p>
            </section>
        </div>
    )
}