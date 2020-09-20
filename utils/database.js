const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('notes', 'root', 'MySqlFun2020', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports = sequelize;