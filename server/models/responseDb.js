import Sequelize from "sequelize-cockroachdb";
import responseModel from "./response.js";

const Database_URL =
    "postgresql://vincent:6TKSblhs4p7DoWgo1o6Mzg@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/MakeUC?sslmode=verify-full&options=--cluster%3Dexpert-peacock-2493";
const sequelize = new Sequelize(Database_URL, {
    dialectOptions: {
        application_name: "expert-peacocl",
    },
});

const responseDB = {};

responseDB.Sequelize = Sequelize;
responseDB.sequelize = sequelize;

responseDB.responses = responseModel(sequelize, Sequelize.DataTypes);

export default responseDB;