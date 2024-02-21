import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)
        } catch (error) {
            res.status(501).json({  message: `${error.message} - falha na requisição ` })
        }
    }

    static async cadastrarLivros (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar o livro` })
        }
        
    }

    static async buscarLivro (req, res) {
        try {
            const id = req.params.id;
            const Livro = await livro.findById(id)  
            res.status(200).json(Livro)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao exibir o livro` })
        }
    }

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id
            const Livro = await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Livro atualizado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar livro` })
        }
    }

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            const Livro = await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "Livro deletado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar o livro` })
        }
    }

};

export default LivroController;
