import { Router, Request, Response } from "express";
import { readPost, readAllPosts } from "../repositories/Post.repo";
import { IPersonalInfo, IPost } from "../interfaces";
import User from "../models/user";
import {
  createPersonalInfo,
  readPersonalInfo,
} from "../repositories/PersonalInfo.repo";

export const PersonalInfoRouter = Router();

// POST
PersonalInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
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
    } = req.body as IPersonalInfo;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newPost = await createPersonalInfo({
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
    return res.send(newPost);
  } catch (error) {
    console.error(error);
  }
});

// READ
PersonalInfoRouter.get(
  "/:personalInfoId/",
  async (req: Request, res: Response) => {
    const { personalInfoId } = req.params;
    try {
      const foundPost = await readPersonalInfo(+personalInfoId);

      if (!foundPost) {
        return res.sendStatus(404);
      }

      res.status(200);

      return res.send(foundPost.toJSON());
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// Update Personal Info

PersonalInfoRouter.put(
  "/:personalInfoId",
  async (req: Request, res: Response) => {
    try {
      const { personalInfoId } = req.params;
      const {
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
      } = req.body as IPersonalInfo;

      const foundPersonalInfo = await readPersonalInfo(+personalInfoId);

      if (!foundPersonalInfo) {
        return res.sendStatus(404);
      }

      foundPersonalInfo.name = name;
      foundPersonalInfo.last_name = last_name;
      foundPersonalInfo.second_last_name = second_last_name;
      foundPersonalInfo.gender = gender;
      foundPersonalInfo.gender_other = gender_other;
      foundPersonalInfo.date_of_birth = date_of_birth;
      foundPersonalInfo.city_of_birth = city_of_birth;
      foundPersonalInfo.state_of_birth = state_of_birth;
      foundPersonalInfo.country_of_birth = country_of_birth;
      foundPersonalInfo.user_id = user_id;

      const updatedUser = await foundPersonalInfo.save();

      return res.status(200).send(updatedUser);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);

// Delete User

PersonalInfoRouter.delete(
  "/:personalInfoId",
  async (req: Request, res: Response) => {
    try {
      const { personalInfoId } = req.params;

      const foundPersonalInfo = await readPersonalInfo(+personalInfoId);

      if (!foundPersonalInfo) {
        return res.sendStatus(404);
      }

      await foundPersonalInfo.destroy();

      return res.sendStatus(204);
    } catch (error) {
      console.error(error);
      return res.sendStatus(400);
    }
  }
);
