import express from "express";
import conectaNaDataBAse from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDataBAse();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com bd ok")
})

const app = express();
routes(app);

export default app;