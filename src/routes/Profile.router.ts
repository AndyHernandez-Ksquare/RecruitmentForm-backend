import { Router, Request, Response } from "express";
import { IProfile } from "../interfaces";
import User from "../models/user";
import { createProfile, readProfile } from "../repositories/Profile.repo";

export const ProfileRouter = Router();

// POST
ProfileRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    } = req.body as IProfile;
    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newProfile = await createProfile({
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    });
    return res.send(newProfile);
  } catch (error) {
    console.error(error);
  }
});

// READ
ProfileRouter.get("/:profileId/", async (req: Request, res: Response) => {
  const { profileId } = req.params;
  try {
    const foundProfile = await readProfile(+profileId);

    if (!foundProfile) {
      return res.sendStatus(404);
    }

    res.status(200);

    return res.send(foundProfile.toJSON());
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});

// UPDATE

ProfileRouter.put("/:profileId", async (req: Request, res: Response) => {
  try {
    const { profileId } = req.params;
    const {
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    } = req.body as IProfile;

    const foundProfile = await readProfile(+profileId);

    if (!foundProfile) {
      return res.sendStatus(404);
    }

    foundProfile.phone = phone;
    foundProfile.country_code = country_code;
    foundProfile.email = email;
    foundProfile.alt_email = alt_email;
    foundProfile.reference = reference;
    foundProfile.other_reference = other_reference;
    foundProfile.user_id = user_id;

    const updatedProfile = await foundProfile.save();

    return res.status(200).send(updatedProfile);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});

// DELETE

ProfileRouter.delete("/:profileId", async (req: Request, res: Response) => {
  try {
    const { profileId } = req.params;

    const foundProfile = await readProfile(+profileId);

    if (!foundProfile) {
      return res.sendStatus(404);
    }

    await foundProfile.destroy();

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
});
