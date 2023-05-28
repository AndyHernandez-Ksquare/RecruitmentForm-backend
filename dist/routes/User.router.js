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
exports.UserRouter = void 0;
const express_1 = require("express");
const User_repo_1 = require("../repositories/User.repo");
exports.UserRouter = (0, express_1.Router)();
// POST
exports.UserRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, firstName, username, lastName, phone, email } = req.body;
        const newUser = yield (0, User_repo_1.createUser)({
            id,
            firstName,
            username,
            lastName,
            phone,
            email,
        });
        return res.status(200).send(newUser);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.UserRouter.get("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    if (username.includes(" ")) {
        return res.sendStatus(400);
    }
    const foundPost = yield (0, User_repo_1.readUser)(username);
    if (!foundPost) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(foundPost.toJSON());
}));
// READ ALL
exports.UserRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, User_repo_1.readAllUsers)();
        return res.send(allUsers);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
// UPDATE
exports.UserRouter.put("/:oldUsername", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { oldUsername } = req.params;
        const { username, firstName, lastName, phone, email } = req.body;
        const foundUser = yield (0, User_repo_1.readUser)(oldUsername);
        if (!foundUser) {
            return res.sendStatus(404);
        }
        foundUser.firstName = firstName;
        foundUser.username = username;
        foundUser.lastName = lastName;
        foundUser.phone = phone;
        foundUser.email = email;
        if (!foundUser.firstName ||
            !foundUser.lastName ||
            !foundUser.phone ||
            !foundUser.email) {
            return res.sendStatus(400).send("Missing required fields.");
        }
        const updatedUser = yield foundUser.save();
        return res.status(200).send(updatedUser);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
// DELETE
exports.UserRouter.delete("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.params;
        if (username.includes(" ")) {
            return res.sendStatus(400);
        }
        const foundUser = yield (0, User_repo_1.readUser)(username);
        if (!foundUser) {
            return res.sendStatus(404);
        }
        yield foundUser.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
