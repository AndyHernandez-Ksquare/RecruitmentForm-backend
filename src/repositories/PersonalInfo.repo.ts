import { IPersonalInfo } from "../interfaces";
import PersonnalInfo from "../models/personalinfo";

export const createPersonalInfo = async ({
  name,
  last_name,
  second_last_name,
  gender,
  gender_other,
  date_of_birth,
  city_of_birth,
  state_of_birth,
  country_of_birth,
  user_id,
}: IPersonalInfo): Promise<PersonnalInfo | null> => {
  try {
    const response = await PersonnalInfo.create({
      name,
      last_name,
      second_last_name,
      gender,
      gender_other,
      date_of_birth,
      city_of_birth,
      state_of_birth,
      country_of_birth,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readPersonalInfo = async (
  id: number
): Promise<PersonnalInfo | null> => {
  const response = await PersonnalInfo.findByPk(id);

  return response;
};

export const readAllPosts = async (): Promise<PersonnalInfo[] | null> => {
  try {
    const allUsers = await PersonnalInfo.findAll();
    return allUsers;
  } catch (error) {
    console.error(error);
    return null;
  }
};
