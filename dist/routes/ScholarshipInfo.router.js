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
exports.ScholarshipInfoRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const ScholarshipInfo_repo_1 = require("../repositories/ScholarshipInfo.repo");
exports.ScholarshipInfoRouter = (0, express_1.Router)();
// POST
exports.ScholarshipInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { level, kind, period, user_id } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newScholarshipInfo = yield (0, ScholarshipInfo_repo_1.createScholarshipInfo)({
            level,
            kind,
            period,
            user_id,
        });
        return res.send(newScholarshipInfo);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.ScholarshipInfoRouter.get("/:scholarshipInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { scholarshipInfoId } = req.params;
    try {
        const foundScholarshipInfo = yield (0, ScholarshipInfo_repo_1.readScholarshipInfo)(+scholarshipInfoId);
        if (!foundScholarshipInfo) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundScholarshipInfo.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.ScholarshipInfoRouter.put("/:scholarshipInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { scholarshipInfoId } = req.params;
        const { level, kind, period, user_id } = req.body;
        const foundScholarshipInfo = yield (0, ScholarshipInfo_repo_1.readScholarshipInfo)(+scholarshipInfoId);
        if (!foundScholarshipInfo) {
            return res.sendStatus(404);
        }
        foundScholarshipInfo.level = level;
        foundScholarshipInfo.kind = kind;
        foundScholarshipInfo.period = period;
        foundScholarshipInfo.user_id = user_id;
        const updatedScholarshipInfo = yield foundScholarshipInfo.save();
        return res.status(200).send(updatedScholarshipInfo);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.ScholarshipInfoRouter.delete("/:scholarshipInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { scholarshipInfoId } = req.params;
        const foundScholarshipInfo = yield (0, ScholarshipInfo_repo_1.readScholarshipInfo)(+scholarshipInfoId);
        if (!foundScholarshipInfo) {
            return res.sendStatus(404);
        }
        yield foundScholarshipInfo.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
