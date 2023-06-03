import { IScholarshipInfo } from "../interfaces";
import ScholarshipInfo from "../models/scholarshipInfo";

export const createScholarshipInfo = async ({
  level,
  kind,
  period,
  user_id,
}: IScholarshipInfo): Promise<ScholarshipInfo | null> => {
  try {
    const response = await ScholarshipInfo.create({
      level,
      kind,
      period,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readScholarshipInfo = async (
  id: number
): Promise<ScholarshipInfo | null> => {
  const response = await ScholarshipInfo.findByPk(id);

  return response;
};
