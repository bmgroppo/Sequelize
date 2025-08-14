const express = require ('express')
const router = express.Router()
const livro = require ('../model/livro')

//GET todos os livros
router.get('/', async (req, res) => {
    try{
    const livros = await livro.findAll()
    res.json(livros)
    }catch(error){
        res.status(500).json({error: 'Erro ao buscar livros'})
    }
})

//GET livro por id
router.get('/:id', async (req, res) => {
    try{
        const livroEncontrado = await livro.findByPk(req.params.id)
        if (livroEncontrado){
            res.json(livroEncontrado)
        }else{
            res.status(404).json({error: 'Livro não encontrado'})
        }
    }catch(error){
        console.error('Erro ao buscar livro:', error);
        res.status(500).json({error: 'Erro ao buscar livro'})
    }
})

//POST novo livro
router.post('/', async (req, res) => {
    try{
        const {nome, imagem, descricao, preco} = req.body
        const novoLivro = await livro.create({nome, imagem, descricao, preco})
        res.status(201).json(novoLivro)
    }catch(error){
        res.status(500).json({error: 'Erro ao criar livro'})
    }
})

//DELETE livro por id
router.delete('/:id', async (req, res) => {
    try{
        const livroEncontrado = await livro.findByPk(req.params.id)
        if (livroEncontrado){
            await livroEncontrado.destroy()
            res.json({message: 'Livro deletado com sucesso'})
        } else{
            res.status(404).json({error: 'Livro não encontrado'})
        }
        }catch(error){
            res.status(500).json({error: 'Erro ao deletar livro'})
        }
})

module.exports = router