const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('operacion', {
    //FK en historial
    operacionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    montoEnviado: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    montoRecibido: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mensaje: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
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
