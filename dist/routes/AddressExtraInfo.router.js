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
        const newAddressEI = yield (0, AddressExtraInfo_repo_1.createAddressExtraInfo)({
            CURP,
            identification_number,
            user_id,
        });
        return res.send(newAddressEI);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.AddressExtraInfoRouter.get("/:addressExtraInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { addressExtraInfoId } = req.params;
    try {
        const foundAddressEI = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(+addressExtraInfoId);
        if (!foundAddressEI) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundAddressEI.toJSON());
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
        const foundAddressEI = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(+addressExtraInfoId);
        if (!foundAddressEI) {
            return res.sendStatus(404);
        }
        foundAddressEI.CURP = CURP;
        foundAddressEI.identification_number = identification_number;
        foundAddressEI.user_id = user_id;
        const updatedAddressEI = yield foundAddressEI.save();
        return res.status(200).send(updatedAddressEI);
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
        const foundAddressEI = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(+addressExtraInfoId);
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
