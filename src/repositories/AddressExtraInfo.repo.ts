import { IAddressExtraInfo } from "../interfaces";
import AddressExtraInfo from "../models/addressextrainfo";
export const createAddressExtraInfo = async ({
  type_of_residency,
  other_residency,
  people,
  address_id,
}: IAddressExtraInfo): Promise<AddressExtraInfo | null> => {
  try {
    const response = await AddressExtraInfo.create({
      type_of_residency,
      other_residency,
      people,
      address_id,
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
