const app = require("./app");

// traigo sequelize para levantar la base de datos

const { sequelize } = require("./db");

const { PORT } = process.env;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, async () => {
    console.log(`%s listening at ${PORT}`);
  });
});
