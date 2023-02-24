const Sequelize = require('sequelize');
require('dotenv').config()

//remember to change the name of your db to what you want it to be!
const db = new Sequelize(process.env.DATABASE_URL , { logging: false });

module.exports = db;