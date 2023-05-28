import { Router } from "express";
import { UserRouter } from "./User.router";
import { CommentRouter } from "./Comment.router";
import { PersonalInfoRouter } from "./PersonalInfo.router";
import { AddressRouter } from "./Address.router";
const APIRouter = Router();

APIRouter.use("/user", UserRouter);
APIRouter.use("/personalInfo", PersonalInfoRouter);
APIRouter.use("/address", AddressRouter);
APIRouter.use("/comment", CommentRouter);

export default APIRouter;
