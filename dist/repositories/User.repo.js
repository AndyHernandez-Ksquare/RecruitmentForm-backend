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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllUsers = exports.readUser = exports.createUser = void 0;
// import {User} from "../../types/global"
const user_1 = __importDefault(require("../models/user"));
const createUser = ({ firstName, userName, lastName, phone, email, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_1.default.create({
            firstName,
            userName,
            lastName,
            phone,
            email,
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createUser = createUser;
const readUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield user_1.default.findByPk(id);
    return response;
});
exports.readUser = readUser;
const readAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield user_1.default.findAll();
        return allUsers;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readAllUsers = readAllUsers;
