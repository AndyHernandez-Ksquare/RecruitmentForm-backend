"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupComment = void 0;
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("./user"));
const Post_1 = __importDefault(require("./Post"));
class Comment extends sequelize_1.Model {
}
const setupComment = (sequelize) => {
    Comment.init({
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
        postId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Post_1.default,
                key: "id",
            },
        },
    }, { modelName: "Comment", sequelize });
};
exports.setupComment = setupComment;
exports.default = Comment;
