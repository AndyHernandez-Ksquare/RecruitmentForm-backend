import { Router, Request, Response } from "express";
import User from "../models/user";
import { IFormalEducationInfo } from "../interfaces";
import {
  createFormalEducationInfo,
  readFormalEducationInfo,
} from "../repositories/FormalEducationInfo.repo";

export const FormalEducationInfoRouter = Router();

// POST
FormalEducationInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    } = req.body as IFormalEducationInfo;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newFormalEducationInfo = await createFormalEducationInfo({
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    });
    return res.send(newFormalEducationInfo);
  } catch (error) {
    console.error(error);
  }
});

// READ
FormalEducationInfoRouter.get(
  "/:formalEducationInfoId/",
  async (req: Request, res: Response) => {
    const { formalEducationInfoId } = req.params;
    try {
      const foundFormalEducationInfo = await readFormalEducationInfo(
        +formalEducationInfoId
      );

      if (!foundFormalEducationInfo) {
        return res.sendStatus(404);
      }

      res.status(200);

      return res.send(foundFormalEducationInfo.toJSON());
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// UPDATE
FormalEducationInfoRouter.put(
  "/:formalEducationInfoId",
  async (req: Request, res: Response) => {
    try {
      const { formalEducationInfoId } = req.params;
      const {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
        user_id,
      } = req.body as IFormalEducationInfo;

      const foundFormalEducationInfo = await readFormalEducationInfo(
        +formalEducationInfoId
      );

      if (!foundFormalEducationInfo) {
        return res.sendStatus(404);
      }
      foundFormalEducationInfo.university_name = university_name;
      foundFormalEducationInfo.state = state;
      foundFormalEducationInfo.country = country;
      foundFormalEducationInfo.career_name = career_name;
      foundFormalEducationInfo.classes_completed = classes_completed;
      foundFormalEducationInfo.proof_classes_completed =
        proof_classes_completed;
      foundFormalEducationInfo.degree_completed = degree_completed;
      foundFormalEducationInfo.proof_degree_completed = proof_degree_completed;
      foundFormalEducationInfo.license_completed = license_completed;
      foundFormalEducationInfo.proof_license_completed =
        proof_license_completed;
      foundFormalEducationInfo.user_id = user_id;

      const updatedFormalEducationInfo = await foundFormalEducationInfo.save();

      return res.status(200).send(updatedFormalEducationInfo);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// DELETE

FormalEducationInfoRouter.delete(
  "/:formalEducationInfoId",
  async (req: Request, res: Response) => {
    try {
      const { formalEducationInfoId } = req.params;

      const foundFormalEducationInfo = await readFormalEducationInfo(
        +formalEducationInfoId
      );

      if (!foundFormalEducationInfo) {
        return res.sendStatus(404);
      }

      await foundFormalEducationInfo.destroy();

      return res.sendStatus(204);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);
