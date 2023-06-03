import { Router } from "express";
import { UserRouter } from "./User.router";
import { PersonalInfoRouter } from "./PersonalInfo.router";
import { AddressRouter } from "./Address.router";
import { GovernmentInfoRouter } from "./GovernmentInfo.router";
import { ProfileRouter } from "./Profile.router";
import { AcademicInfoRouter } from "./AcademicInfo.router";
import { AddressExtraInfoRouter } from "./AddressExtraInfo.router";
import { FormalEducationInfoRouter } from "./FormalEducationInfo.router";
import { ScholarshipInfoRouter } from "./ScholarshipInfo.router";
import { BankAccountInfoRouter } from "./BankAccountInfo.router";
const APIRouter = Router();

APIRouter.use("/user", UserRouter);
APIRouter.use("/personalInfo", PersonalInfoRouter);
APIRouter.use("/address", AddressRouter);
APIRouter.use("/addressExtraInfo", AddressExtraInfoRouter);
APIRouter.use("/governmentInfo", GovernmentInfoRouter);
APIRouter.use("/profile", ProfileRouter);
APIRouter.use("/academicInfo", AcademicInfoRouter);
APIRouter.use("/formalEducationInfo", FormalEducationInfoRouter);
APIRouter.use("/scholarshipInfo", ScholarshipInfoRouter);
APIRouter.use("/bankAccountInfo", BankAccountInfoRouter);

export default APIRouter;
