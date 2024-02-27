import mongoose from "mongoose"

mongoose.connect("mongodb+srv://heitor_dev:heitor_dev@clientes.xhdenmz.mongodb.net/");

let db = mongoose.connection;

export default db;