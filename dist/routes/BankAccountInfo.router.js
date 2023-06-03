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
exports.BankAccountInfoRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const BankAccountInfo_repo_1 = require("../repositories/BankAccountInfo.repo");
exports.BankAccountInfoRouter = (0, express_1.Router)();
// POST
exports.BankAccountInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { acc_number, clabe, bank, user_id } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newBankAccountInfo = yield (0, BankAccountInfo_repo_1.createBankAccountInfo)({
            acc_number,
            clabe,
            bank,
            user_id,
        });
        return res.send(newBankAccountInfo);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.BankAccountInfoRouter.get("/:bankAccountInfoId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bankAccountInfoId } = req.params;
    try {
        const foundBankAccountInfo = yield (0, BankAccountInfo_repo_1.readBankAccountInfo)(+bankAccountInfoId);
        if (!foundBankAccountInfo) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundBankAccountInfo.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.BankAccountInfoRouter.put("/:bankAccountInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bankAccountInfoId } = req.params;
        const { acc_number, clabe, bank, user_id } = req.body;
        const foundBankAccountInfo = yield (0, BankAccountInfo_repo_1.readBankAccountInfo)(+bankAccountInfoId);
        if (!foundBankAccountInfo) {
            return res.sendStatus(404);
        }
        foundBankAccountInfo.acc_number = acc_number;
        foundBankAccountInfo.clabe = clabe;
        foundBankAccountInfo.bank = bank;
        foundBankAccountInfo.user_id = user_id;
        const updatedBankAccountInfo = yield foundBankAccountInfo.save();
        return res.status(200).send(updatedBankAccountInfo);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.BankAccountInfoRouter.delete("/:bankAccountInfoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bankAccountInfoId } = req.params;
        const foundBankAccountInfo = yield (0, BankAccountInfo_repo_1.readBankAccountInfo)(+bankAccountInfoId);
        if (!foundBankAccountInfo) {
            return res.sendStatus(404);
        }
        yield foundBankAccountInfo.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
