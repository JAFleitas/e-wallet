require("dotenv").config();

// recordar crear la base de datos en sequelize y crear el archivo .env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize, Op } = require("sequelize");
//traemos los modelos
const modelUser = require('../models/Users');
const modelBalance = require('../models/Balance');
const modelContacto = require('../models/Contacto');
const modelDivisa = require('../models/Divisa');
const modelHistorial = require('../models/Historial');
const modelOperacion = require('../models/Operacion');
const modelTarjeta = require('../models/Tarjeta');


const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );


      // inyeccion de modelos a sequelize
      modelUser(sequelize);
      modelBalance(sequelize);
      modelContacto(sequelize);
      modelDivisa(sequelize);
      modelHistorial(sequelize);
      modelOperacion(sequelize);
      modelTarjeta(sequelize);
      const { user, balance, contacto, divisa, operacion, tarjeta, historial } = sequelize.models;
      //relacion de las tablas
      user.hasMany(operacion);
      operacion.belongsTo(user);
      user.belongsToMany(operacion, {through: 'historial'})
      operacion.belongsToMany(user, {through: 'historial'})
      user.hasMany(tarjeta);
      tarjeta.belongsTo(user);
      user.belongsToMany(divisa, {through: 'balance'})
      divisa.belongsToMany(user, {through: 'balance'})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize, // para importart la conexión { conn } = require('./db.js');
  Op, // para poder importar los operadores tales como ilike en las consultas a la database
};
