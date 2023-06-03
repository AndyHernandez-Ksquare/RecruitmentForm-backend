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
const AddressExtraInfo_repo_1 = require("./../repositories/AddressExtraInfo.repo");
const express_1 = require("express");
const address_1 = __importDefault(require("../models/address"));
exports.AddressExtraInfoRouter = (0, express_1.Router)();
// POST
exports.AddressExtraInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type_of_residency, other_residency, people, address_id } = req.body;
        const addressExists = yield address_1.default.findByPk(address_id);
        if (!addressExists) {
            return res.sendStatus(400);
        }
        const newAddressEI = yield (0, AddressExtraInfo_repo_1.createAddressExtraInfo)({
            type_of_residency,
            other_residency,
            people,
            address_id,
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
        const { type_of_residency, other_residency, people, address_id } = req.body;
        const foundAddressEI = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(+addressExtraInfoId);
        if (!foundAddressEI) {
            return res.sendStatus(404);
        }
        foundAddressEI.type_of_residency = type_of_residency;
        foundAddressEI.other_residency = other_residency;
        foundAddressEI.people = people;
        foundAddressEI.address_id = address_id;
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
