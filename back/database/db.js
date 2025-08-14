const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize ('api_fullstack', 'user', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize