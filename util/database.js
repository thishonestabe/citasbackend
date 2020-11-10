const Sequelize = require('sequelize');

// const sequelize = new Sequelize('citasdentist', 'root', '123456789', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

const sequelize = new Sequelize('heroku_25527c9814913b6', 'b1c47c6845c37a', '983f0316', {
    dialect: 'mysql',
    host: 'eu-cdbr-west-03.cleardb.net'
});

module.exports = sequelize;


