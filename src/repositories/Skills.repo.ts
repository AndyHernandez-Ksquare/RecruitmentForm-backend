import { ISkills } from "../interfaces";
import Skills from "../models/skills";

export const createSkills = async ({
  preferred_programming_language,
  experience,
  disability,
  user_id,
}: ISkills): Promise<Skills | null> => {
  try {
    const response = await Skills.create({
      preferred_programming_language,
      experience,
      disability,
      user_id,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readSkills = async (id: number): Promise<Skills | null> => {
  const response = await Skills.findByPk(id);

  return response;
};
