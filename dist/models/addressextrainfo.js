"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAddressExtraInfo = void 0;
const sequelize_1 = require("sequelize");
class AddressExtraInfo extends sequelize_1.Model {
    static associate(models) {
        AddressExtraInfo.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
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
        CURP: sequelize_1.DataTypes.STRING,
        identification_number: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "AddressExtraInfo",
    });
};
exports.setupAddressExtraInfo = setupAddressExtraInfo;
exports.default = AddressExtraInfo;
