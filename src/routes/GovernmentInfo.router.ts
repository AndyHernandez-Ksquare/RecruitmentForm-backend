import { Router, Request, Response } from "express";
import User from "../models/user";
import { IGovernmentInfo } from "../interfaces";
import {
  createGovernmentInfo,
  readGovernmentInfo,
} from "../repositories/GovernmentInfo.repo";

export const GovernmentInfoRouter = Router();

// POST
GovernmentInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { CURP, identification_number, user_id } =
      req.body as IGovernmentInfo;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newGovernmentInfo = await createGovernmentInfo({
      CURP,
      identification_number,
      user_id,
    });
    return res.send(newGovernmentInfo);
  } catch (error) {
    console.error(error);
  }
});

// READ
GovernmentInfoRouter.get(
  "/:governmentInfoId/",
  async (req: Request, res: Response) => {
    const { governmentInfoId } = req.params;
    try {
      const foundGovernmentInfo = await readGovernmentInfo(+governmentInfoId);

      if (!foundGovernmentInfo) {
        return res.sendStatus(404);
      }

      res.status(200);

      return res.send(foundGovernmentInfo.toJSON());
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// UPDATE
GovernmentInfoRouter.put(
  "/:governmentInfoId",
  async (req: Request, res: Response) => {
    try {
      const { governmentInfoId } = req.params;
      const { CURP, identification_number, user_id } =
        req.body as IGovernmentInfo;

      const foundGovernmentInfo = await readGovernmentInfo(+governmentInfoId);

      if (!foundGovernmentInfo) {
        return res.sendStatus(404);
      }
      foundGovernmentInfo.CURP = CURP;
      foundGovernmentInfo.identification_number = identification_number;
      foundGovernmentInfo.user_id = user_id;

      const updatedGovernmentInfo = await foundGovernmentInfo.save();

      return res.status(200).send(updatedGovernmentInfo);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// DELETE

GovernmentInfoRouter.delete(
  "/:addressExtraInfoId",
  async (req: Request, res: Response) => {
    try {
      const { addressExtraInfoId } = req.params;

      const foundAddressEI = await readGovernmentInfo(+addressExtraInfoId);

      if (!foundAddressEI) {
        return res.sendStatus(404);
      }

      await foundAddressEI.destroy();

      return res.sendStatus(204);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);
