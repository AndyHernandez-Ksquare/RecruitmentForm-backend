import { IGovernmentInfo } from "../interfaces";
import AddressExtraInfo from "../models/governmentInfo";

export const createGovernmentInfo = async ({
  CURP,
  identification_number,
  user_id,
}: IGovernmentInfo): Promise<AddressExtraInfo | null> => {
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

export const readGovernmentInfo = async (
  id: number
): Promise<AddressExtraInfo | null> => {
  const response = await AddressExtraInfo.findByPk(id);

  return response;
};
