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
exports.readGovernmentInfo = exports.createGovernmentInfo = void 0;
const governmentInfo_1 = __importDefault(require("../models/governmentInfo"));
const createGovernmentInfo = ({ CURP, identification_number, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield governmentInfo_1.default.create({
            CURP,
            identification_number,
            user_id,
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createGovernmentInfo = createGovernmentInfo;
const readGovernmentInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield governmentInfo_1.default.findByPk(id);
    return response;
});
exports.readGovernmentInfo = readGovernmentInfo;
