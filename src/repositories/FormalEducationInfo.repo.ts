import { IFormalEducationInfo } from "../interfaces/index";
import FormalEducationInfo from "../models/formaleducationinfo";

export const createFormalEducationInfo = async ({
  university_name,
  state,
  country,
  career_name,
  classes_completed,
  proof_classes_completed,
  degree_completed,
  proof_degree_completed,
  license_completed,
  proof_license_completed,
  user_id,
}: IFormalEducationInfo): Promise<FormalEducationInfo | null> => {
  try {
    const response = await FormalEducationInfo.create({
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readFormalEducationInfo = async (
  id: number
): Promise<FormalEducationInfo | null> => {
  const response = await FormalEducationInfo.findByPk(id);

  return response;
};
