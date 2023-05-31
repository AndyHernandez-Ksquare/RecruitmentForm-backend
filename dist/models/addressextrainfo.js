"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAddressExtraInfo = void 0;
const sequelize_1 = require("sequelize");
const address_1 = __importDefault(require("./address"));
class AddressExtraInfo extends sequelize_1.Model {
    static associate(models) {
        address_1.default.belongsTo(models.Address, {
            foreignKey: "address_id",
            as: "address",
        });
    }
}
const setupAddressExtraInfo = (sequelize) => {
    AddressExtraInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type_of_residency: sequelize_1.DataTypes.STRING,
        other_residency: sequelize_1.DataTypes.STRING,
        people: sequelize_1.DataTypes.STRING,
        address_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "AddressExtraInfo",
    });
};
exports.setupAddressExtraInfo = setupAddressExtraInfo;
exports.default = AddressExtraInfo;
