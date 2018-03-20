module.exports = function (sequelize, DataTypes) {
    const Card = sequelize.define("Card", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        cost: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 500]
            }
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return Card;
};