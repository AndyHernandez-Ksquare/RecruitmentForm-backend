import { IProfile } from "../interfaces";
import Profile from "../models/profile";

export const createProfile = async ({
  phone,
  country_code,
  email,
  alt_email,
  reference,
  other_reference,
  user_id,
}: IProfile): Promise<Profile | null> => {
  try {
    const response = await Profile.create({
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readProfile = async (id: number): Promise<Profile | null> => {
  const response = await Profile.findByPk(id);

  return response;
};
