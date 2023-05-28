"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAddress = void 0;
const sequelize_1 = require("sequelize");
class Address extends sequelize_1.Model {
    static associate(models) {
        Address.belongsTo(models.User, {
            foreignKey: "user_id",
            as: "user",
        });
    }
}
const setupAddress = (sequelize) => {
    Address.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        street: sequelize_1.DataTypes.STRING,
        in_between_street_a: sequelize_1.DataTypes.STRING,
        in_between_street_b: sequelize_1.DataTypes.STRING,
        city: sequelize_1.DataTypes.STRING,
        state: sequelize_1.DataTypes.STRING,
        country: sequelize_1.DataTypes.STRING,
        zip: sequelize_1.DataTypes.STRING,
        proof_of_address: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "Address",
    });
};
exports.setupAddress = setupAddress;
exports.default = Address;
