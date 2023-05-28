import { Router, Request, Response } from "express";
import User from "../models/user";
import { IAddress } from "../interfaces";
import { createAddress, readAddress } from "../repositories/Address.repo";

export const AddressRouter = Router();

// POST
AddressRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    } = req.body as IAddress;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newAddress = await createAddress({
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    });
    return res.send(newAddress);
  } catch (error) {
    console.error(error);
  }
});

// READ
AddressRouter.get("/:addressId/", async (req: Request, res: Response) => {
  const { addressId } = req.params;
  try {
    const foundAddress = await readAddress(+addressId);

    if (!foundAddress) {
      return res.sendStatus(404);
    }

    res.status(200);

    return res.send(foundAddress.toJSON());
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});

// UPDATE

AddressRouter.put("/:addressId", async (req: Request, res: Response) => {
  try {
    const { addressId } = req.params;
    const {
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    } = req.body as IAddress;

    const foundAddress = await readAddress(+addressId);

    if (!foundAddress) {
      return res.sendStatus(404);
    }
    foundAddress.street = street;
    foundAddress.in_between_street_a = in_between_street_a;
    foundAddress.in_between_street_b = in_between_street_b;
    foundAddress.city = city;
    foundAddress.state = state;
    foundAddress.country = country;
    foundAddress.zip = zip;
    foundAddress.proof_of_address = proof_of_address;
    foundAddress.user_id = user_id;

    const updatedAddress = await foundAddress.save();

    return res.status(200).send(updatedAddress);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});

// DELETE

AddressRouter.delete("/:addressId", async (req: Request, res: Response) => {
  try {
    const { addressId } = req.params;

    const foundAddress = await readAddress(+addressId);

    if (!foundAddress) {
      return res.sendStatus(404);
    }

    await foundAddress.destroy();

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});
