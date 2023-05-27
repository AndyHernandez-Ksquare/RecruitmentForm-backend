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
exports.CommentRouter = void 0;
const express_1 = require("express");
const Comment_repo_1 = require("../repositories/Comment.repo");
const Post_1 = __importDefault(require("../models/Post"));
const user_1 = __importDefault(require("../models/user"));
exports.CommentRouter = (0, express_1.Router)();
// POST
exports.CommentRouter.post("/:postId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, userId } = req.body;
        const postId = Number(req.params.postId);
        const post = yield Post_1.default.findByPk(postId);
        const user = yield user_1.default.findByPk(userId);
        if (!post || !user) {
            return res.status(400).send("Invalid postId or userId");
        }
        const newPost = yield (0, Comment_repo_1.createComment)({ text, userId, postId });
        return res.send(newPost);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.CommentRouter.get("/:postId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    const foundPost = yield (0, Comment_repo_1.readComment)(+postId);
    if ((foundPost === null || foundPost === void 0 ? void 0 : foundPost.length) === 0) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(foundPost);
}));
