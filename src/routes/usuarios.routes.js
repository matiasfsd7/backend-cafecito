import { Router } from "express";
import { listarUsuarios } from "../controllers/usuarios.controllers.js";

const usuarios = Router();

usuarios.route("/usuarios").get(listarUsuarios); // mi backend va a recibir de api/usuarios

export default usuarios;
