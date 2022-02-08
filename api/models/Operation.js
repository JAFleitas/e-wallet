const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('operation', {
    //FK en historial
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    valueSent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    valueReceived: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    // user_id: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   // references: {
    //   //   model: 'Users',
    //   //   key: 'userId'
    //   // }
    // },

  });
};
