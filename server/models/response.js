export default function responseModel(sequelize, DataTypes){
    const Response = sequelize.define("response", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        authorName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        authorId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        campaignId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uniqueId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            default: DataTypes.NOW,
        }
    })

    return Response
}