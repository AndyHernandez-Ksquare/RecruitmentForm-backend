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
exports.SkillsRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const Skills_repo_1 = require("../repositories/Skills.repo");
exports.SkillsRouter = (0, express_1.Router)();
// POST
exports.SkillsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { preferred_programming_language, experience, disability, user_id } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newSkills = yield (0, Skills_repo_1.createSkills)({
            preferred_programming_language,
            experience,
            disability,
            user_id,
        });
        return res.send(newSkills);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.SkillsRouter.get("/:skillsId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { skillsId } = req.params;
    try {
        const foundSkills = yield (0, Skills_repo_1.readSkills)(+skillsId);
        if (!foundSkills) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundSkills.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.SkillsRouter.put("/:skillsId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { skillsId } = req.params;
        const { preferred_programming_language, experience, disability, user_id } = req.body;
        const foundSkills = yield (0, Skills_repo_1.readSkills)(+skillsId);
        if (!foundSkills) {
            return res.sendStatus(404);
        }
        foundSkills.preferred_programming_language = preferred_programming_language;
        foundSkills.experience = experience;
        foundSkills.disability = disability;
        foundSkills.user_id = user_id;
        const updatedSkills = yield foundSkills.save();
        return res.status(200).send(updatedSkills);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.SkillsRouter.delete("/:skillsId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { skillsId } = req.params;
        const foundSkills = yield (0, Skills_repo_1.readSkills)(+skillsId);
        if (!foundSkills) {
            return res.sendStatus(404);
        }
        yield foundSkills.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
