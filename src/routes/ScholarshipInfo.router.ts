import { Router, Request, Response } from "express";
import { IScholarshipInfo } from "../interfaces";
import User from "../models/user";
// import { createProfile, readProfile } from "../repositories/Profile.repo";
import {
  createScholarshipInfo,
  readScholarshipInfo,
} from "../repositories/ScholarshipInfo.repo";

export const ScholarshipInfoRouter = Router();

// POST
ScholarshipInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { level, kind, period, user_id } = req.body as IScholarshipInfo;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newScholarshipInfo = await createScholarshipInfo({
      level,
      kind,
      period,
      user_id,
    });
    return res.send(newScholarshipInfo);
  } catch (error) {
    console.error(error);
  }
});

// READ
ScholarshipInfoRouter.get(
  "/:scholarshipInfoId/",
  async (req: Request, res: Response) => {
    const { scholarshipInfoId } = req.params;
    try {
      const foundScholarshipInfo = await readScholarshipInfo(
        +scholarshipInfoId
      );

      if (!foundScholarshipInfo) {
        return res.sendStatus(404);
      }

      res.status(200);

      return res.send(foundScholarshipInfo.toJSON());
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// UPDATE

ScholarshipInfoRouter.put(
  "/:scholarshipInfoId",
  async (req: Request, res: Response) => {
    try {
      const { scholarshipInfoId } = req.params;
      const { level, kind, period, user_id } = req.body as IScholarshipInfo;

      const foundScholarshipInfo = await readScholarshipInfo(
        +scholarshipInfoId
      );

      if (!foundScholarshipInfo) {
        return res.sendStatus(404);
      }

      foundScholarshipInfo.level = level;
      foundScholarshipInfo.kind = kind;
      foundScholarshipInfo.period = period;
      foundScholarshipInfo.user_id = user_id;

      const updatedScholarshipInfo = await foundScholarshipInfo.save();

      return res.status(200).send(updatedScholarshipInfo);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// DELETE

ScholarshipInfoRouter.delete(
  "/:scholarshipInfoId",
  async (req: Request, res: Response) => {
    try {
      const { scholarshipInfoId } = req.params;

      const foundScholarshipInfo = await readScholarshipInfo(
        +scholarshipInfoId
      );

      if (!foundScholarshipInfo) {
        return res.sendStatus(404);
      }

      await foundScholarshipInfo.destroy();

      return res.sendStatus(204);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);
