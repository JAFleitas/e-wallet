const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "account",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      currency: {
        type: DataTypes.ENUM,
        values: ["ARS", "USD", "MXN", "PEN"],
        allowNull: false,
      },
      money: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: "lastUpdate",
    }
  );
};
