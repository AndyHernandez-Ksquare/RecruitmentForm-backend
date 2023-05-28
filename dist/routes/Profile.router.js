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
exports.ProfileRouter = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const Profile_repo_1 = require("../repositories/Profile.repo");
exports.ProfileRouter = (0, express_1.Router)();
// POST
exports.ProfileRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone, country_code, email, alt_email, reference, other_reference, user_id, } = req.body;
        const userExists = yield user_1.default.findByPk(user_id);
        if (!userExists) {
            return res.sendStatus(400);
        }
        const newProfile = yield (0, Profile_repo_1.createProfile)({
            phone,
            country_code,
            email,
            alt_email,
            reference,
            other_reference,
            user_id,
        });
        return res.send(newProfile);
    }
    catch (error) {
        console.error(error);
    }
}));
// READ
exports.ProfileRouter.get("/:profileId/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { profileId } = req.params;
    try {
        const foundProfile = yield (0, Profile_repo_1.readProfile)(+profileId);
        if (!foundProfile) {
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(foundProfile.toJSON());
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// UPDATE
exports.ProfileRouter.put("/:profileId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profileId } = req.params;
        const { phone, country_code, email, alt_email, reference, other_reference, user_id, } = req.body;
        const foundProfile = yield (0, Profile_repo_1.readProfile)(+profileId);
        if (!foundProfile) {
            return res.sendStatus(404);
        }
        foundProfile.phone = phone;
        foundProfile.country_code = country_code;
        foundProfile.email = email;
        foundProfile.alt_email = alt_email;
        foundProfile.reference = reference;
        foundProfile.other_reference = other_reference;
        foundProfile.user_id = user_id;
        const updatedProfile = yield foundProfile.save();
        return res.status(200).send(updatedProfile);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
// DELETE
exports.ProfileRouter.delete("/:profileId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profileId } = req.params;
        const foundProfile = yield (0, Profile_repo_1.readProfile)(+profileId);
        if (!foundProfile) {
            return res.sendStatus(404);
        }
        yield foundProfile.destroy();
        return res.sendStatus(204);
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}));
