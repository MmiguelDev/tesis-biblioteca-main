/* Importamos bibliotecas */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

/* Rutas */
import addRouter from "./routes/add.routes.js";
import editRouter from "./routes/edit.routes.js";
import deleteRouter from "./routes/delete.routes.js";
import registroRouter from "./routes/registros.routes.js";
import entregadoRouter from "./routes/entregado.routes.js";
import obtenerRouter from "./routes/obtener.routes.js";
import busquedaRouter from "./routes/busqueda.routes.js";

dotenv.config();

const app = express(); // Inicializamos Express
const port = 5000; // Puerto
const server = createServer(app); // Creamos un servidor HTTP
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Permitir el acceso del frontend
    credentials: true,
  },
});

/* Hacemos que sea JSON la respuesta y que pueda acceder el frontend al backend */
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

/* Configurar WebSockets */
io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado:", socket.id);

  socket.on("mensaje", (data) => {
    console.log("Mensaje recibido:", data);
    io.emit("mensaje", data); // Reenvía el mensaje a todos los clientes
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

/* Rutas */
app.use("/api/add", addRouter);
app.use("/api/edit", editRouter);
app.use("/api/delete", deleteRouter);
app.use("/api/get", obtenerRouter);
app.use("/api/registros", registroRouter);
app.use("/api/entregados", entregadoRouter);
app.use("/api/busqueda", busquedaRouter);

/* Otras rutas que no sean las antes dichas */
app.use("*", (req, res) => {
  res.send("Hello World!");
});

/* Escuchamos el servidor con Socket.io */
server.listen(port, () => {
  console.log("Server is running on: " + port);
});
