"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDB = void 0;
const sequelize_1 = require("sequelize");
const Post_1 = require("../models/Post");
const user_1 = require("../models/user");
const Comments_1 = require("../models/Comments");
const personalinfo_1 = require("../models/personalinfo");
let sequelize;
const startDB = (url) => __awaiter(void 0, void 0, void 0, function* () {
    sequelize = new sequelize_1.Sequelize(url);
    (0, user_1.setupUser)(sequelize);
    (0, personalinfo_1.setupPersonalInfo)(sequelize);
    (0, Post_1.setupPost)(sequelize);
    (0, Comments_1.setupComment)(sequelize);
    return sequelize;
});
exports.startDB = startDB;
