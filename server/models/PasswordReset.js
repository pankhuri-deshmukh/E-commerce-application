module.exports = (sequelize, DataTypes) => {

const PasswordReset = sequelize.define("PasswordReset", {
    reset_token: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    expiration_duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    }, {
        timestamps: true
    });

    return PasswordReset;
    };
