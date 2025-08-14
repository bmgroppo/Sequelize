const express = require ('express')
const sequelize = require ('./database/db')
const cors = require ('cors')
const livroController = require ('./controllers/livroController')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/livros', livroController)

async function startServer(){
    try{
        await sequelize.authenticate()
        console.log('Conexão com o banco de dados estabelecida com sucesso')

        await sequelize.sync()
        console.log('Tabelas sincronizadas com sucesso')

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    }catch(error){
        console.error('Erro ao iniciar o servidor:', error)
    }
}

startServer()

module.exports = app