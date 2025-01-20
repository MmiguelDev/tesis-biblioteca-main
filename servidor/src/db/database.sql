-- Tabla ALUMNOS
CREATE TABLE alumnos (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  apellido VARCHAR(40) NOT NULL,
  grado INT NOT NULL,
  grupo VARCHAR(1) NOT NULL,
  num_control INT NOT NULL UNIQUE
);

-- Tabla CATEGORÍAS
CREATE TABLE categorias (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(20) NOT NULL UNIQUE
);

-- Tabla AUTORES
CREATE TABLE autores (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(20) NOT NULL,
  apellido VARCHAR(20) NOT NULL
);

-- Tabla EDITORIALES
CREATE TABLE editoriales (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL UNIQUE
);

-- Tabla LIBROS
CREATE TABLE libros (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(40) NOT NULL UNIQUE,
  id_autor INT UNSIGNED NOT NULL,
  id_editorial INT UNSIGNED NOT NULL,
  id_categoria INT UNSIGNED NOT NULL,
  existencias INT NOT NULL,
  paginas INT NOT NULL,
  
  FOREIGN KEY (id_autor) 
  REFERENCES autores(id) 
    ON UPDATE RESTRICT 
    ON DELETE RESTRICT,
  FOREIGN KEY (id_editorial) 
  REFERENCES editoriales(id) 
    ON UPDATE RESTRICT 
    ON DELETE RESTRICT,
  FOREIGN KEY (id_categoria) 
  REFERENCES categorias(id) 
    ON UPDATE RESTRICT 
    ON DELETE RESTRICT
);

-- Tabla ENTREGADOS
CREATE TABLE entregados (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  entregado BOOLEAN
);

-- Tabla REGISTROS
CREATE TABLE registros (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_alumno INT UNSIGNED NOT NULL,
  id_libro INT UNSIGNED NOT NULL,
  inicio DATE NOT NULL,
  fin DATE NOT NULL,
  id_entregado INT UNSIGNED NOT NULL,
  
  FOREIGN KEY (id_alumno) 
  REFERENCES alumnos(id) 
    ON UPDATE RESTRICT 
    ON DELETE RESTRICT,
  FOREIGN KEY (id_libro) 
  REFERENCES libros(id) 
    ON UPDATE RESTRICT 
    ON DELETE RESTRICT,
  FOREIGN KEY (id_entregado) 
  REFERENCES entregados(id) 
    ON UPDATE RESTRICT 
    ON DELETE RESTRICT
  
);