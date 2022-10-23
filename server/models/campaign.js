export default function campaignModel(sequelize, DataTypes){
    const Campaign = sequelize.define("campaign", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        tags: {
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
        uniqueId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            default: DataTypes.NOW,
        }
        
    })

    return Campaign
}