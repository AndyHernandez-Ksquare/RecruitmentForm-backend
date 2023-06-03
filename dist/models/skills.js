"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSkills = void 0;
const sequelize_1 = require("sequelize");
class Skills extends sequelize_1.Model {
    static associate(models) {
        Skills.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    }
}
const setupSkills = (sequelize) => {
    Skills.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        preferred_programming_language: sequelize_1.DataTypes.STRING,
        experience: sequelize_1.DataTypes.STRING,
        disability: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "Skills",
    });
};
exports.setupSkills = setupSkills;
exports.default = Skills;
