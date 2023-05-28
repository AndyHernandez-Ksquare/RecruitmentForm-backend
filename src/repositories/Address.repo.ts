import { IAddress } from "../interfaces";
import Address from "../models/address";
export const createAddress = async ({
  street,
  in_between_street_a,
  in_between_street_b,
  city,
  state,
  country,
  zip,
  proof_of_address,
  user_id,
}: IAddress): Promise<Address | null> => {
  try {
    const response = await Address.create({
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
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readAddress = async (id: number): Promise<Address | null> => {
  const response = await Address.findByPk(id);

  return response;
};
