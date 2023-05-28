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
exports.AddressRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const Address_repo_1 = require("../repositories/Address.repo");
exports.AddressRouter = (0, express_1.Router)();
// POST
exports.AddressRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newAddress = yield (0, Address_repo_1.createAddress)({
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
            user_id,
        });
        return res.send(newAddress);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.AddressRouter.get("/:addressId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { addressId } = req.params;
    try {
        const foundAddress = yield (0, Address_repo_1.readAddress)(+addressId);
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
exports.AddressRouter.put("/:addressId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addressId } = req.params;
        const { street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, } = req.body;
        const foundAddress = yield (0, Address_repo_1.readAddress)(+addressId);
        if (!foundAddress) {
            return res.sendStatus(404);
        }
        foundAddress.street = street;
        foundAddress.in_between_street_a = in_between_street_a;
        foundAddress.in_between_street_b = in_between_street_b;
        foundAddress.city = city;
        foundAddress.state = state;
        foundAddress.country = country;
        foundAddress.zip = zip;
        foundAddress.proof_of_address = proof_of_address;
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
exports.AddressRouter.delete("/:addressId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addressId } = req.params;
        const foundAddress = yield (0, Address_repo_1.readAddress)(+addressId);
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
