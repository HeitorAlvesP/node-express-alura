import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).send("Lista de livros")
})

app.get("/autores", (req, res) => {
    res.status(200).send("Lista de autores")
})

export default app;