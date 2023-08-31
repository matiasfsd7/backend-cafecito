import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; // me da la habilidad de procesar variables de entorno
import productoRouter from "./src/routes/productos.routes.js";
//1 confifuraciones iniciales
const app = express();
//crear una variable
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("aqui estoy en el puerto tal " + app.get("port"));
});

//2 middlewares: funciones que se agregan antes de las rutas
app.use(cors()); // nos permite conexiones remota
app.use(express.json()); // este va a permitir que si me backend me mande json lo procesa
app.use(express.urlencoded({ extended: true })); // ayuda a interpretar datos del body del request
app.use(morgan("dev")); // nos da mas inforamacion en la terminal

//3 crear las rutas
// http://localhost:4000/api/producto
app.use("/api", productoRouter);

//crear una ruta y controlador par alos usuarios
