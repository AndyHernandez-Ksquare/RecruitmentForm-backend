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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = require("./db");
const app_1 = __importDefault(require("./app"));
const URI_CONN = process.env.URI_CONN;
const PORT = process.env.PORT;
app_1.default.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (URI_CONN) {
            const sequelize = yield (0, db_1.startDB)(URI_CONN);
            yield sequelize.authenticate();
            console.log(`App is up and running at port ${PORT}`);
        }
    }
    catch (error) {
        console.error(error);
        process.abort();
    }
}));
// Commands to create and run seeds:
// 1. Create: npx sequelize-cli seed:generate --name (seed_name)
// 2. Run: npx sequelize-cli db:seed:all
// 3. Delete: npx sequelize-cli db:seed:undo
// Commands to create model (User example)
// 1. sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
// Commands to create and run migration
//1. Create: npx sequelize-cli db:migrate
// 2. Run: npx sequelize-cli db:migrate --env development
// 3. Add migration file: npx sequelize-cli migration:generate --name add-association-personalInfo-user
// 3 Undo latest migration: sequelize db:migrate:undo
