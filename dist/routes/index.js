"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_router_1 = require("./User.router");
const PersonalInfo_router_1 = require("./PersonalInfo.router");
const Address_router_1 = require("./Address.router");
const GovernmentInfo_router_1 = require("./GovernmentInfo.router");
const Profile_router_1 = require("./Profile.router");
const AcademicInfo_router_1 = require("./AcademicInfo.router");
const AddressExtraInfo_router_1 = require("./AddressExtraInfo.router");
const FormalEducationInfo_router_1 = require("./FormalEducationInfo.router");
const ScholarshipInfo_router_1 = require("./ScholarshipInfo.router");
const APIRouter = (0, express_1.Router)();
APIRouter.use("/user", User_router_1.UserRouter);
APIRouter.use("/personalInfo", PersonalInfo_router_1.PersonalInfoRouter);
APIRouter.use("/address", Address_router_1.AddressRouter);
APIRouter.use("/addressExtraInfo", AddressExtraInfo_router_1.AddressExtraInfoRouter);
APIRouter.use("/governmentInfo", GovernmentInfo_router_1.GovernmentInfoRouter);
APIRouter.use("/profile", Profile_router_1.ProfileRouter);
APIRouter.use("/academicInfo", AcademicInfo_router_1.AcademicInfoRouter);
APIRouter.use("/formalEducationInfo", FormalEducationInfo_router_1.FormalEducationInfoRouter);
APIRouter.use("/scholarshipInfo", ScholarshipInfo_router_1.ScholarshipInfoRouter);
exports.default = APIRouter;
