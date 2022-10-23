import Sequelize from "sequelize-cockroachdb";
import campaignModel from "./campaign.js";

const Database_URL =
    "postgresql://vincent:6TKSblhs4p7DoWgo1o6Mzg@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/MakeUC?sslmode=verify-full&options=--cluster%3Dexpert-peacock-2493";
const sequelize = new Sequelize(Database_URL, {
    dialectOptions: {
        application_name: "expert-peacocl",
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.campaigns = campaignModel(sequelize, Sequelize.DataTypes);

export default db;