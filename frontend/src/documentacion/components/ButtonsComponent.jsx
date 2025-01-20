import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Tutorial from "../pages/TutorialPage";
import Docs from "../pages/DocsPage";

export default function Botones() {
    // Estado para controlar si el botón está abierto o cerrado
    const [isTutorialOpen, setIsTutorialOpen] = useState(false);
    const [isDocsOpen, setIsDocsOpen] = useState(flase);

    // Manejo del evento de click en el botón
    const handleChangeTutorial = () => {
        setIsTutorialOpen(!isTutorialOpen);
    }

    const handleChangeDocs = () => {
        setIsDocsOpen(!isDocsOpen);
    }

    return (
        <div>
            <section className="p-10 bg-slate-300 mt-10">
                    <h2 className="text-center text-lg font-semibold text-slate-900">Leer más...</h2>
                    <div className="m-5 flex">
                        <button className="p-2 bg-lime-700 hover:bg-lime-800 rounded-lg text-white flex"
                                onClick={handleChangeTutorial}>
                            ¿Cómo utilizar "DB Biblioteca"?

                            {
                                isTutorialOpen ? (
                                    <IoIosArrowUp className="text-center m-1" />
                                ) : (
                                    <IoIosArrowDown className="text-center m-1" />
                                )
                            }
                        </button>
                        <button className="p-2 bg-lime-700 hover:bg-lime-800 rounded-lg text-white flex"
                                onClick={handleChangeDocs}>
                            Leer documentación del código

                            {
                                isDocsOpen ? (
                                    <IoIosArrowUp className="text-center m-1" />
                                ) : (
                                    <IoIosArrowDown className="text-center m-1" />
                                )
                            }
                        </button>
                    </div>
                </section>
                {
                    isTutorialOpen && (
                        <Docs />
                    )
                }
        </div>
    );
}