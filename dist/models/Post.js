"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPost = void 0;
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("./user"));
class Post extends sequelize_1.Model {
}
const setupPost = (sequelize) => {
    Post.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: sequelize_1.DataTypes.STRING,
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: user_1.default,
                key: "id",
            },
        },
    }, { modelName: "Post", sequelize });
};
exports.setupPost = setupPost;
exports.default = Post;
