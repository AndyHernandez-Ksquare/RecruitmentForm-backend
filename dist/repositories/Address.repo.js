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
exports.readAddress = exports.createAddress = void 0;
const address_1 = __importDefault(require("../models/address"));
const createAddress = ({ street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield address_1.default.create({
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
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createAddress = createAddress;
const readAddress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield address_1.default.findByPk(id);
    return response;
});
exports.readAddress = readAddress;
