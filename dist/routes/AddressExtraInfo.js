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
exports.AddressExtraInfoRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const AddressExtraInfo_repo_1 = require("../repositories/AddressExtraInfo.repo");
exports.AddressExtraInfoRouter = (0, express_1.Router)();
// POST
exports.AddressExtraInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CURP, identification_number, user_id } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newAddress = yield (0, AddressExtraInfo_repo_1.createAddressExtraInfo)({
            CURP,
            identification_number,
            user_id,
        });
        return res.send(newAddress);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.AddressExtraInfoRouter.get("/:addressExtraInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { addressExtraInfoId } = req.params;
    try {
        const foundAddress = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(+addressExtraInfoId);
        if (!foundAddress) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundAddress.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.AddressExtraInfoRouter.put("/:addressExtraInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addressExtraInfoId } = req.params;
        const { CURP, identification_number, user_id } = req.body;
        const foundAddress = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(+addressExtraInfoId);
        if (!foundAddress) {
            return res.sendStatus(404);
        }
        foundAddress.CURP = CURP;
        foundAddress.identification_number = identification_number;
        foundAddress.user_id = user_id;
        const updatedUser = yield foundAddress.save();
        return res.status(200).send(updatedUser);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.AddressExtraInfoRouter.delete("/:addressExtraInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addressExtraInfoId } = req.params;
        const foundAddress = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(+addressExtraInfoId);
        if (!foundAddress) {
            return res.sendStatus(404);
        }
        yield foundAddress.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
