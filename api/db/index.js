/* eslint-disable */
require("dotenv").config();

// recordar crear la base de datos en sequelize y crear el archivo .env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize, Op } = require("sequelize");
// traemos los modelos
const modelUser = require("../models/Users");
const modelBalance = require("../models/Balance");
const modelContact = require("../models/Contact");
const modelCurrency = require("../models/Currency");
const modelHistory = require("../models/History");
const modelOperation = require("../models/Operation");
const modelCard = require("../models/Card");

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
          idle: 10000
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false
          },
          keepAlive: true
        },
        ssl: true
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );

// inyeccion de modelos a sequelize
modelUser(sequelize);
modelBalance(sequelize);
modelContact(sequelize);
modelCurrency(sequelize);
modelHistory(sequelize);
modelOperation(sequelize);
modelCard(sequelize);
const { user, balance, contact, currency, operation, card, history } =
  sequelize.models;
// relacion de las tablas
user.hasMany(operation);
operation.belongsTo(user);
user.belongsToMany(operation, { through: "history" });
operation.belongsToMany(user, { through: "history" });
user.hasMany(card);
card.belongsTo(user);
user.belongsToMany(currency, { through: "balance" });
currency.belongsToMany(user, { through: "balance" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize, // para importart la conexión { conn } = require('./db.js');
  Op // para poder importar los operadores tales como ilike en las consultas a la database
};
