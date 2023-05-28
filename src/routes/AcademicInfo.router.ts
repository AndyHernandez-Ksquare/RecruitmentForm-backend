import { Router, Request, Response } from "express";
import User from "../models/user";
import { IAcademicInfo } from "../interfaces";
import {
  createAcademicInfo,
  readAcademicInfo,
} from "../repositories/AcademicInfo.repo";

export const AcademicInfoRouter = Router();

// POST
AcademicInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    } = req.body as IAcademicInfo;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newAcademicInfo = await createAcademicInfo({
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    });
    return res.send(newAcademicInfo);
  } catch (error) {
    console.error(error);
  }
});

// READ
AcademicInfoRouter.get(
  "/:academicInfoId/",
  async (req: Request, res: Response) => {
    const { academicInfoId } = req.params;
    try {
      const foundAcademicInfo = await readAcademicInfo(+academicInfoId);

      if (!foundAcademicInfo) {
        return res.sendStatus(404);
      }

      res.status(200);

      return res.send(foundAcademicInfo.toJSON());
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// UPDATE

AcademicInfoRouter.put(
  "/:academicInfoId",
  async (req: Request, res: Response) => {
    try {
      const { academicInfoId } = req.params;
      const {
        software_devel_comments,
        degree_level,
        informal_education,
        other_education,
        user_id,
      } = req.body as IAcademicInfo;

      const foundAcademicInfo = await readAcademicInfo(+academicInfoId);

      if (!foundAcademicInfo) {
        return res.sendStatus(404);
      }
      foundAcademicInfo.software_devel_comments = software_devel_comments;
      foundAcademicInfo.degree_level = degree_level;
      foundAcademicInfo.informal_education = informal_education;
      foundAcademicInfo.other_education = other_education;
      foundAcademicInfo.user_id = user_id;

      const updatedAcademicInfo = await foundAcademicInfo.save();

      return res.status(200).send(updatedAcademicInfo);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// DELETE

AcademicInfoRouter.delete(
  "/:academicInfoId",
  async (req: Request, res: Response) => {
    try {
      const { academicInfoId } = req.params;

      const foundAcademicInfo = await readAcademicInfo(+academicInfoId);

      if (!foundAcademicInfo) {
        return res.sendStatus(404);
      }

      await foundAcademicInfo.destroy();

      return res.sendStatus(204);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);
