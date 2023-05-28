import { Router } from "express";
import { UserRouter } from "./User.router";
import { PersonalInfoRouter } from "./PersonalInfo.router";
import { AddressRouter } from "./Address.router";
import { AddressExtraInfoRouter } from "./AddressExtraInfo.router";
import { ProfileRouter } from "./Profile.router";
const APIRouter = Router();

APIRouter.use("/user", UserRouter);
APIRouter.use("/personalInfo", PersonalInfoRouter);
APIRouter.use("/address", AddressRouter);
APIRouter.use("/addressExtraInfo", AddressExtraInfoRouter);
APIRouter.use("/profile", ProfileRouter);

export default APIRouter;
