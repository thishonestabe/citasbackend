const Sequelize = require('sequelize');

const sequelize = new Sequelize('citasdentist', 'root', '123456789', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
