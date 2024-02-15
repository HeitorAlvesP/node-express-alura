import http from "http";

const PORT = 3000

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Aqui fica o nome dos livros",
    "/autores": "Aqui fica o nome dos autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url])
})

server.listen(PORT,() => {
    console.log('Porta 3000 ok')
})