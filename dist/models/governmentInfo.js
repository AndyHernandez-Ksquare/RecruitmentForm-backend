"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGovernmentInfo = void 0;
const sequelize_1 = require("sequelize");
class GovernmentInfo extends sequelize_1.Model {
    static associate(models) {
        GovernmentInfo.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    }
}
const setupGovernmentInfo = (sequelize) => {
    GovernmentInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        CURP: sequelize_1.DataTypes.STRING,
        identification_number: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "GovernmentInfo",
    });
};
exports.setupGovernmentInfo = setupGovernmentInfo;
exports.default = GovernmentInfo;
