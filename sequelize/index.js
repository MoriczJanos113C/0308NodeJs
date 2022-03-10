//npm i mariadb
//npm i sequelize

const config = require('./config');
const Sequelize = require('sequelize');

const db = new Sequelize(config.database, config.host, config.user, config.password, config.port = {
    host: config.localhost,
    port: config.port,
    dialect: "mariadb"
})