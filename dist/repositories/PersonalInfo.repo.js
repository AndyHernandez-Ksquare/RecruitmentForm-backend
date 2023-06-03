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
exports.readPersonalInfo = exports.createPersonalInfo = void 0;
const personalinfo_1 = __importDefault(require("../models/personalinfo"));
const createPersonalInfo = ({ name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield personalinfo_1.default.create({
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
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createPersonalInfo = createPersonalInfo;
const readPersonalInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield personalinfo_1.default.findByPk(id);
    return response;
});
exports.readPersonalInfo = readPersonalInfo;
