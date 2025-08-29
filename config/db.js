import { Sequelize } from "sequelize";

const sequelize = new Sequelize("profiles", "root", "1424", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
