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
exports.PersonalInfoRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const PersonalInfo_repo_1 = require("../repositories/PersonalInfo.repo");
exports.PersonalInfoRouter = (0, express_1.Router)();
// POST
exports.PersonalInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newPersonalInfo = yield (0, PersonalInfo_repo_1.createPersonalInfo)({
            name,
            last_name,
            second_last_name,
            gender,
            gender_other,
            date_of_birth,
            city_of_birth,
            state_of_birth,
            country_of_birth,
            user_id,
        });
        return res.send(newPersonalInfo);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.PersonalInfoRouter.get("/:personalInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { personalInfoId } = req.params;
    try {
        const foundPersonalInfo = yield (0, PersonalInfo_repo_1.readPersonalInfo)(+personalInfoId);
        if (!foundPersonalInfo) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundPersonalInfo.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.PersonalInfoRouter.put("/:personalInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { personalInfoId } = req.params;
        const { name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, } = req.body;
        const foundPersonalInfo = yield (0, PersonalInfo_repo_1.readPersonalInfo)(+personalInfoId);
        if (!foundPersonalInfo) {
            return res.sendStatus(404);
        }
        foundPersonalInfo.name = name;
        foundPersonalInfo.last_name = last_name;
        foundPersonalInfo.second_last_name = second_last_name;
        foundPersonalInfo.gender = gender;
        foundPersonalInfo.gender_other = gender_other;
        foundPersonalInfo.date_of_birth = date_of_birth;
        foundPersonalInfo.city_of_birth = city_of_birth;
        foundPersonalInfo.state_of_birth = state_of_birth;
        foundPersonalInfo.country_of_birth = country_of_birth;
        foundPersonalInfo.user_id = user_id;
        const updatedPersonalInfo = yield foundPersonalInfo.save();
        return res.status(200).send(updatedPersonalInfo);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.PersonalInfoRouter.delete("/:personalInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { personalInfoId } = req.params;
        const foundPersonalInfo = yield (0, PersonalInfo_repo_1.readPersonalInfo)(+personalInfoId);
        if (!foundPersonalInfo) {
            return res.sendStatus(404);
        }
        yield foundPersonalInfo.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
