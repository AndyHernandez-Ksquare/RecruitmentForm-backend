"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPersonalInfo = void 0;
const sequelize_1 = require("sequelize");
class PersonnalInfo extends sequelize_1.Model {
    static associate(models) {
        PersonnalInfo.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    }
}
const setupPersonalInfo = (sequelize) => {
    PersonnalInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: sequelize_1.DataTypes.STRING,
        last_name: sequelize_1.DataTypes.STRING,
        second_last_name: sequelize_1.DataTypes.STRING,
        gender: sequelize_1.DataTypes.STRING,
        gender_other: sequelize_1.DataTypes.STRING,
        date_of_birth: sequelize_1.DataTypes.DATE,
        city_of_birth: sequelize_1.DataTypes.STRING,
        state_of_birth: sequelize_1.DataTypes.STRING,
        country_of_birth: sequelize_1.DataTypes.STRING,
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: "PersonalInfo",
    });
};
exports.setupPersonalInfo = setupPersonalInfo;
exports.default = PersonnalInfo;
