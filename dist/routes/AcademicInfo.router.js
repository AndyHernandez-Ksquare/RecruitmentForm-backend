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
exports.AcademicInfoRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const AcademicInfo_repo_1 = require("../repositories/AcademicInfo.repo");
exports.AcademicInfoRouter = (0, express_1.Router)();
// POST
exports.AcademicInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { software_devel_comments, degree_level, informal_education, other_education, user_id, } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newAcademicInfo = yield (0, AcademicInfo_repo_1.createAcademicInfo)({
            software_devel_comments,
            degree_level,
            informal_education,
            other_education,
            user_id,
        });
        return res.send(newAcademicInfo);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.AcademicInfoRouter.get("/:academicInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { academicInfoId } = req.params;
    try {
        const foundAcademicInfo = yield (0, AcademicInfo_repo_1.readAcademicInfo)(+academicInfoId);
        if (!foundAcademicInfo) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundAcademicInfo.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.AcademicInfoRouter.put("/:academicInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { academicInfoId } = req.params;
        const { software_devel_comments, degree_level, informal_education, other_education, user_id, } = req.body;
        const foundAcademicInfo = yield (0, AcademicInfo_repo_1.readAcademicInfo)(+academicInfoId);
        if (!foundAcademicInfo) {
            return res.sendStatus(404);
        }
        foundAcademicInfo.software_devel_comments = software_devel_comments;
        foundAcademicInfo.degree_level = degree_level;
        foundAcademicInfo.informal_education = informal_education;
        foundAcademicInfo.other_education = other_education;
        foundAcademicInfo.user_id = user_id;
        const updatedAcademicInfo = yield foundAcademicInfo.save();
        return res.status(200).send(updatedAcademicInfo);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.AcademicInfoRouter.delete("/:academicInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { academicInfoId } = req.params;
        const foundAcademicInfo = yield (0, AcademicInfo_repo_1.readAcademicInfo)(+academicInfoId);
        if (!foundAcademicInfo) {
            return res.sendStatus(404);
        }
        yield foundAcademicInfo.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
