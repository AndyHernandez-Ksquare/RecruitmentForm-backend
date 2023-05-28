import { IAddrexxExtraInfo } from "../interfaces";
import AddressExtraInfo from "../models/addressextrainfo";

export const createAddressExtraInfo = async ({
  CURP,
  identification_number,
  user_id,
}: IAddrexxExtraInfo): Promise<AddressExtraInfo | null> => {
  try {
    const response = await AddressExtraInfo.create({
      CURP,
      identification_number,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readAddressExtraInfo = async (
  id: number
): Promise<AddressExtraInfo | null> => {
  const response = await AddressExtraInfo.findByPk(id);

  return response;
};
