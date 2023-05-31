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
exports.GovernmentInfoRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const GovernmentInfo_repo_1 = require("../repositories/GovernmentInfo.repo");
exports.GovernmentInfoRouter = (0, express_1.Router)();
// POST
exports.GovernmentInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CURP, identification_number, user_id } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newGovernmentInfo = yield (0, GovernmentInfo_repo_1.createGovernmentInfo)({
            CURP,
            identification_number,
            user_id,
        });
        return res.send(newGovernmentInfo);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.GovernmentInfoRouter.get("/:governmentInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { governmentInfoId } = req.params;
    try {
        const foundGovernmentInfo = yield (0, GovernmentInfo_repo_1.readGovernmentInfo)(+governmentInfoId);
        if (!foundGovernmentInfo) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundGovernmentInfo.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.GovernmentInfoRouter.put("/:governmentInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { governmentInfoId } = req.params;
        const { CURP, identification_number, user_id } = req.body;
        const foundGovernmentInfo = yield (0, GovernmentInfo_repo_1.readGovernmentInfo)(+governmentInfoId);
        if (!foundGovernmentInfo) {
            return res.sendStatus(404);
        }
        foundGovernmentInfo.CURP = CURP;
        foundGovernmentInfo.identification_number = identification_number;
        foundGovernmentInfo.user_id = user_id;
        const updatedGovernmentInfo = yield foundGovernmentInfo.save();
        return res.status(200).send(updatedGovernmentInfo);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.GovernmentInfoRouter.delete("/:addressExtraInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addressExtraInfoId } = req.params;
        const foundAddressEI = yield (0, GovernmentInfo_repo_1.readGovernmentInfo)(+addressExtraInfoId);
        if (!foundAddressEI) {
            return res.sendStatus(404);
        }
        yield foundAddressEI.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
