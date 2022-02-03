const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // esta tabla es un intermedio de dos tablas, puede que no sea necesaria, dependiendo de que informacion se traiga
  sequelize.define('balance', {

  });
};
