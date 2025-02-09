/* Importar Base de datos */
import { pool } from '../db/db.js'

/* Modulo para editar una entrega */
export const editEntrega = async (req, res) => {
  try {
    const {id} = req.params
    const { entregado } = req.body;

    const [resultados] = await pool.query("SELECT * FROM entregados WHERE id = ?", [
      id, 
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "El registro no se ha encontrado" });

    const [result] = await pool.query(
      `UPDATE entregados 
      SET entregado = ?
      WHERE id = ?`,
      [entregado, id]
    );

    res.json({
      id: result.insertId,
      entregado
    }).status(201);

  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
}

/* Modulo de editar un alumno */
export const editAlumno = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, apellido, grado, grupo, num_control } = req.body;

    const [resultados] = await pool.query("SELECT * FROM alumnos WHERE id = ?", [
      id,
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "El alumno no se ha encontrado" });

    const [result] = await pool.query(
      `UPDATE alumnos 
      SET nombre = ?, apellido = ?, grado = ?, grupo = ?, num_control = ?
      WHERE id = ?`,
      [nombre, apellido, grado, grupo, num_control, id]
    );

    res.json({
      id: result.insertId,
      nombre, apellido, grado, grupo, num_control
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de editar un libro */
export const editLibro = async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, id_autor, id_editorial, id_categoria, existencias, num_paginas } = req.body;

    const [resultados] = await pool.query("SELECT * FROM libros WHERE id = ?", [
      id,
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "No se ha encontrado el libro" });

    const [result] = await pool.query(
      `UPDATE libros 
      SET titulo = ?, id_autor = ?, id_editorial = ?, id_categoria = ?, existencias = ?, num_paginas = ?
      WHERE id = ?`,
      [titulo, id_autor, id_editorial, id_categoria, existencias, num_paginas, id]
    );

    res.json({
      id: result.insertId,
      titulo, id_autor, id_editorial, id_categoria, existencias, num_paginas
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de editar una categoria */
export const editCategoria = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre } = req.body;

    const [resultados] = await pool.query("SELECT * FROM categorias WHERE id = ?", [
      id,
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "No se ha encontrado la categoria" });

    const [result] = await pool.query(
      `UPDATE categorias
      SET nombre = ? 
      WHERE id = ?`,
      [nombre, id]
    );

    res.json({
      id: result.insertId,
      nombre
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de editar una editorial */
export const editEditorial = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre } = req.body;

    const [resultados] = await pool.query("SELECT * FROM editoriales WHERE id = ?", [
      id,
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "No se ha encontrado el editorial" });

    const [result] = await pool.query(
      `UPDATE editoriales
      SET nombre = ? 
      WHERE id = ?`,
      [nombre, id]
    );

    res.json({
      id: result.insertId,
      nombre
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de editar un autor */
export const editAutor = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, apellido } = req.body;

    const [resultados] = await pool.query("SELECT * FROM autores WHERE id = ?", [
      id
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "No se encontro el autor" });

    const [result] = await pool.query(
      `UPDATE autores
      SET nombre = ?, apellido = ?
      WHERE id = ?`,
      [nombre, apellido, id]
    );

    res.json({
      id: result.insertId,
      nombre, apellido
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo para ediar un registro */
export const editRegistro  = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_entregado } = req.body

    const [resultado] = await pool.query("SELECT * FROM registros WHERE id = ?", [
      id,
    ]);

    if (resultado.length === 0) // <-- Aquí debería ser resultado, no result
  return res.status(404).json({ message: "No se encontró el registro" });

    const [result] = await pool.query(
      `UPDATE registros
      SET id_entregado = ?
      WHERE id = ?`,
      [id_entregado, id]
    );
    
    res.status(200).json({
      id: id, // Usar el ID que ya tienes
      id_entregado: id_entregado
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};