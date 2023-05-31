import { Router, Request, Response } from "express";
import User from "../models/user";
import { IAddrexxExtraInfo } from "../interfaces";
import {
  createAddressExtraInfo,
  readAddressExtraInfo,
} from "../repositories/governmentInfo.repo";

export const AddressExtraInfoRouter = Router();

// POST
AddressExtraInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { CURP, identification_number, user_id } =
      req.body as IAddrexxExtraInfo;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newAddressEI = await createAddressExtraInfo({
      CURP,
      identification_number,
      user_id,
    });
    return res.send(newAddressEI);
  } catch (error) {
    console.error(error);
  }
});

// READ
AddressExtraInfoRouter.get(
  "/:addressExtraInfoId/",
  async (req: Request, res: Response) => {
    const { addressExtraInfoId } = req.params;
    try {
      const foundAddressEI = await readAddressExtraInfo(+addressExtraInfoId);

      if (!foundAddressEI) {
        return res.sendStatus(404);
      }

      res.status(200);

      return res.send(foundAddressEI.toJSON());
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// UPDATE
AddressExtraInfoRouter.put(
  "/:addressExtraInfoId",
  async (req: Request, res: Response) => {
    try {
      const { addressExtraInfoId } = req.params;
      const { CURP, identification_number, user_id } =
        req.body as IAddrexxExtraInfo;

      const foundAddressEI = await readAddressExtraInfo(+addressExtraInfoId);

      if (!foundAddressEI) {
        return res.sendStatus(404);
      }
      foundAddressEI.CURP = CURP;
      foundAddressEI.identification_number = identification_number;
      foundAddressEI.user_id = user_id;

      const updatedAddressEI = await foundAddressEI.save();

      return res.status(200).send(updatedAddressEI);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// DELETE

AddressExtraInfoRouter.delete(
  "/:addressExtraInfoId",
  async (req: Request, res: Response) => {
    try {
      const { addressExtraInfoId } = req.params;

      const foundAddressEI = await readAddressExtraInfo(+addressExtraInfoId);

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
