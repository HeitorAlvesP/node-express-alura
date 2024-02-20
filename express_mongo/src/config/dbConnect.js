import mongoose from "mongoose";

async function conectaNaDataBAse() {
    mongoose.connect("mongodb+srv://heitor_dev:heitor_dev@clientes.xhdenmz.mongodb.net/livros?retryWrites=true&w=majority");
    
    return mongoose.connection;
}

export default conectaNaDataBAse;


