import {
  createAddressExtraInfo,
  readAddressExtraInfo,
} from "./../repositories/AddressExtraInfo.repo";
import { Router, Request, Response } from "express";
import User from "../models/user";
import { IAddressExtraInfo } from "../interfaces";
import Address from "../models/address";

export const AddressExtraInfoRouter = Router();

// POST
AddressExtraInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { type_of_residency, other_residency, people, address_id } =
      req.body as IAddressExtraInfo;
    const addressExists = await Address.findByPk(address_id);

    if (!addressExists) {
      return res.sendStatus(400);
    }
    const newAddressEI = await createAddressExtraInfo({
      type_of_residency,
      other_residency,
      people,
      address_id,
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
      const { type_of_residency, other_residency, people, address_id } =
        req.body as IAddressExtraInfo;

      const foundAddressEI = await readAddressExtraInfo(+addressExtraInfoId);

      if (!foundAddressEI) {
        return res.sendStatus(404);
      }
      foundAddressEI.type_of_residency = type_of_residency;
      foundAddressEI.other_residency = other_residency;
      foundAddressEI.people = people;
      foundAddressEI.address_id = address_id;

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
