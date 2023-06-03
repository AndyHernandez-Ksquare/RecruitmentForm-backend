"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScholarshipInfo = void 0;
const sequelize_1 = require("sequelize");
class ScholarshipInfo extends sequelize_1.Model {
    static associate(models) {
        ScholarshipInfo.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    }
}
const setupScholarshipInfo = (sequelize) => {
    ScholarshipInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        level: sequelize_1.DataTypes.STRING,
        kind: sequelize_1.DataTypes.STRING,
        period: sequelize_1.DataTypes.INTEGER,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "AcademicInfo",
    });
};
exports.setupScholarshipInfo = setupScholarshipInfo;
exports.default = ScholarshipInfo;
