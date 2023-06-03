import { IBankAccount } from "../interfaces/index";
import BankAccountInfo from "../models/bankaccountinfo";

export const createBankAccountInfo = async ({
  acc_number,
  clabe,
  bank,
  user_id,
}: IBankAccount): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.create({
      acc_number,
      clabe,
      bank,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readBankAccountInfo = async (
  id: number
): Promise<BankAccountInfo | null> => {
  const response = await BankAccountInfo.findByPk(id);

  return response;
};
