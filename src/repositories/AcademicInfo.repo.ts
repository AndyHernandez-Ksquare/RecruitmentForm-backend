import { IAcademicInfo } from "../interfaces";
import AcademicInfo from "../models/academicinfo";
export const createAcademicInfo = async ({
  software_devel_comments,
  degree_level,
  informal_education,
  other_education,
  user_id,
}: IAcademicInfo): Promise<AcademicInfo | null> => {
  try {
    const response = await AcademicInfo.create({
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readAcademicInfo = async (
  id: number
): Promise<AcademicInfo | null> => {
  const response = await AcademicInfo.findByPk(id);

  return response;
};
