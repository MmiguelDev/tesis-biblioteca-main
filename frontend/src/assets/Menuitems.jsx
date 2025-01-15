import { FiBook, FiList } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdNoteAdd } from "react-icons/md";
import { TbCategory, TbCategoryPlus } from "react-icons/tb";

export const Menus = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Biblioteca",
    subMenuHeading: ["Alumno", "Admnistrador"],
    subMenu: [
      {
        name: "Libros",
        desc: "Lista de libros",
        icon: FiBook,
        path: "/libros",
      },
      {
        name: "Añadir Registro",
        desc: "Añadir un registro",
        icon: FiList,
        path: "/agregar-registro",
      },
      {
        name: "Autores",
        desc: "Lista de Autores",
        icon: BsFillPeopleFill,
        path: "/autores",
      },
      {
        name: "Añadir Libro",
        desc: "Añadir un libro",
        icon: MdNoteAdd,
        path: "/agregar-libro",
      },
      {
        name: "Categorias",
        desc: "Lista de Categorias Literarias",
        icon: TbCategory,
        path: "/categorias",
      },
      {
        name: "Añadir Categoria",
        desc: "Añadir una Categoria",
        icon: TbCategoryPlus,
        path: "/agregar-categorias",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Inventario",
    path: "/inventario",
  },
];
