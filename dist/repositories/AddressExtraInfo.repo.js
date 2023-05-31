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
exports.readAddressExtraInfo = exports.createAddressExtraInfo = void 0;
const addressextrainfo_1 = __importDefault(require("../models/addressextrainfo"));
const createAddressExtraInfo = ({ type_of_residency, other_residency, people, address_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield addressextrainfo_1.default.create({
            type_of_residency,
            other_residency,
            people,
            address_id,
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createAddressExtraInfo = createAddressExtraInfo;
const readAddressExtraInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield addressextrainfo_1.default.findByPk(id);
    return response;
});
exports.readAddressExtraInfo = readAddressExtraInfo;
