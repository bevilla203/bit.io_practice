const Sequelize = require('sequelize');

//remember to change the name of your db to what you want it to be!
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/test_prj', { logging: false });

module.exports = db;