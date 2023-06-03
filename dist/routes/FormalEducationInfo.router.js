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
exports.FormalEducationInfoRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const FormalEducationInfo_repo_1 = require("../repositories/FormalEducationInfo.repo");
exports.FormalEducationInfoRouter = (0, express_1.Router)();
// POST
exports.FormalEducationInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { university_name, state, country, career_name, classes_completed, proof_classes_completed, degree_completed, proof_degree_completed, license_completed, proof_license_completed, user_id, } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newGovernmentInfo = yield (0, FormalEducationInfo_repo_1.createFormalEducationInfo)({
            university_name,
            state,
            country,
            career_name,
            classes_completed,
            proof_classes_completed,
            degree_completed,
            proof_degree_completed,
            license_completed,
            proof_license_completed,
            user_id,
        });
        return res.send(newGovernmentInfo);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.FormalEducationInfoRouter.get("/:formalEducationInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formalEducationInfoId } = req.params;
    try {
        const foundFormalEducationInfo = yield (0, FormalEducationInfo_repo_1.readFormalEducationInfo)(+formalEducationInfoId);
        if (!foundFormalEducationInfo) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundFormalEducationInfo.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.FormalEducationInfoRouter.put("/:formalEducationInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { formalEducationInfoId } = req.params;
        const { university_name, state, country, career_name, classes_completed, proof_classes_completed, degree_completed, proof_degree_completed, license_completed, proof_license_completed, user_id, } = req.body;
        const foundFormalEducationInfo = yield (0, FormalEducationInfo_repo_1.readFormalEducationInfo)(+formalEducationInfoId);
        if (!foundFormalEducationInfo) {
            return res.sendStatus(404);
        }
        foundFormalEducationInfo.university_name = university_name;
        foundFormalEducationInfo.state = state;
        foundFormalEducationInfo.country = country;
        foundFormalEducationInfo.career_name = career_name;
        foundFormalEducationInfo.classes_completed = classes_completed;
        foundFormalEducationInfo.proof_classes_completed =
            proof_classes_completed;
        foundFormalEducationInfo.degree_completed = degree_completed;
        foundFormalEducationInfo.proof_degree_completed = proof_degree_completed;
        foundFormalEducationInfo.license_completed = license_completed;
        foundFormalEducationInfo.proof_license_completed =
            proof_license_completed;
        foundFormalEducationInfo.user_id = user_id;
        const updatedFormalEducationInfo = yield foundFormalEducationInfo.save();
        return res.status(200).send(updatedFormalEducationInfo);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.FormalEducationInfoRouter.delete("/:formalEducationInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { formalEducationInfoId } = req.params;
        const foundFormalEducationInfo = yield (0, FormalEducationInfo_repo_1.readFormalEducationInfo)(+formalEducationInfoId);
        if (!foundFormalEducationInfo) {
            return res.sendStatus(404);
        }
        yield foundFormalEducationInfo.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
