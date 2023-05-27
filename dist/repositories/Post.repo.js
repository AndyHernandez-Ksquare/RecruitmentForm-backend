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
exports.readAllPosts = exports.readPost = exports.createPost = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const createPost = ({ userId, text, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Post_1.default.create({
            userId,
            text,
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createPost = createPost;
const readPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Post_1.default.findByPk(id);
    return response;
});
exports.readPost = readPost;
const readAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield Post_1.default.findAll();
        return allUsers;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readAllPosts = readAllPosts;
