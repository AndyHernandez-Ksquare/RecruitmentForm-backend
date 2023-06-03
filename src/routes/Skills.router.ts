import { Router, Request, Response } from "express";
import { ISkills } from "../interfaces";
import User from "../models/user";
import { createSkills, readSkills } from "../repositories/Skills.repo";

export const SkillsRouter = Router();

// POST
SkillsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { preferred_programming_language, experience, disability, user_id } =
      req.body as ISkills;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newSkills = await createSkills({
      preferred_programming_language,
      experience,
      disability,
      user_id,
    });
    return res.send(newSkills);
  } catch (error) {
    console.error(error);
  }
});

// READ
SkillsRouter.get("/:skillsId/", async (req: Request, res: Response) => {
  const { skillsId } = req.params;
  try {
    const foundSkills = await readSkills(+skillsId);

    if (!foundSkills) {
      return res.sendStatus(404);
    }

    res.status(200);

    return res.send(foundSkills.toJSON());
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});

// UPDATE

SkillsRouter.put("/:skillsId", async (req: Request, res: Response) => {
  try {
    const { skillsId } = req.params;
    const { preferred_programming_language, experience, disability, user_id } =
      req.body as ISkills;

    const foundSkills = await readSkills(+skillsId);

    if (!foundSkills) {
      return res.sendStatus(404);
    }

    foundSkills.preferred_programming_language = preferred_programming_language;
    foundSkills.experience = experience;
    foundSkills.disability = disability;
    foundSkills.user_id = user_id;

    const updatedSkills = await foundSkills.save();

    return res.status(200).send(updatedSkills);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});

// DELETE

SkillsRouter.delete("/:skillsId", async (req: Request, res: Response) => {
  try {
    const { skillsId } = req.params;

    const foundSkills = await readSkills(+skillsId);

    if (!foundSkills) {
      return res.sendStatus(404);
    }

    await foundSkills.destroy();

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});
