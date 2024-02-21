import mongoose from "mongoose";

async function conectaNaDataBAse() {
    mongoose.connect(process.env.DB_CONECTION_STRING);
    return mongoose.connection;
}

export default conectaNaDataBAse;


