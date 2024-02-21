import { autor }   from "../models/Autor.js";

class AutorController {
    
    static async listarAutores (req, res) {
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores)
        } catch (error) {
            res.status(501).json({  message: `${error.message} - falha na requisição ` })
        }
    }

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar o Autor` })
        }
        
    }

    static async buscarAutores (req, res) {
        try {
            const id = req.params.id;
            const Autores = await autor.findById(id)  
            res.status(200).json(Autores)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao exibir o Autores` })
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id
            const Autores = await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Autor atualizado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar autor` })
        }
    }

    static async deletarAutor (req, res) {
        try {
            const id = req.params.id;
            const Autores = await autor.findByIdAndDelete(id)
            res.status(200).json({ message: "Autor deletado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar o autor` })
        }
    }

};

export default AutorController;
