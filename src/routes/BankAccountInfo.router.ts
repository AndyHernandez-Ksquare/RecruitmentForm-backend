import { Router, Request, Response } from "express";
import User from "../models/user";
import { IBankAccount } from "../interfaces";
import {
  createBankAccountInfo,
  readBankAccountInfo,
} from "../repositories/BankAccountInfo.repo";

export const BankAccountInfoRouter = Router();

// POST
BankAccountInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { acc_number, clabe, bank, user_id } = req.body as IBankAccount;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newBankAccountInfo = await createBankAccountInfo({
      acc_number,
      clabe,
      bank,
      user_id,
    });
    return res.send(newBankAccountInfo);
  } catch (error) {
    console.error(error);
  }
});

// READ
BankAccountInfoRouter.get(
  "/:bankAccountInfoId/",
  async (req: Request, res: Response) => {
    const { bankAccountInfoId } = req.params;
    try {
      const foundBankAccountInfo = await readBankAccountInfo(
        +bankAccountInfoId
      );

      if (!foundBankAccountInfo) {
        return res.sendStatus(404);
      }

      res.status(200);

      return res.send(foundBankAccountInfo.toJSON());
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// UPDATE
BankAccountInfoRouter.put(
  "/:bankAccountInfoId",
  async (req: Request, res: Response) => {
    try {
      const { bankAccountInfoId } = req.params;
      const { acc_number, clabe, bank, user_id } = req.body as IBankAccount;

      const foundBankAccountInfo = await readBankAccountInfo(
        +bankAccountInfoId
      );

      if (!foundBankAccountInfo) {
        return res.sendStatus(404);
      }
      foundBankAccountInfo.acc_number = acc_number;
      foundBankAccountInfo.clabe = clabe;
      foundBankAccountInfo.bank = bank;
      foundBankAccountInfo.user_id = user_id;

      const updatedBankAccountInfo = await foundBankAccountInfo.save();

      return res.status(200).send(updatedBankAccountInfo);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// DELETE

BankAccountInfoRouter.delete(
  "/:bankAccountInfoId",
  async (req: Request, res: Response) => {
    try {
      const { bankAccountInfoId } = req.params;

      const foundBankAccountInfo = await readBankAccountInfo(
        +bankAccountInfoId
      );

      if (!foundBankAccountInfo) {
        return res.sendStatus(404);
      }

      await foundBankAccountInfo.destroy();

      return res.sendStatus(204);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);
