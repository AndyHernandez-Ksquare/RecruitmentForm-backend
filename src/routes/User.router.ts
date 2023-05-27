import { Router, Request, Response } from "express";
import { IUser } from "../interfaces";
import { createUser, readAllUsers, readUser } from "../repositories/User.repo";

export const UserRouter = Router();

// POST
UserRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { id, firstName, username, lastName, phone, email } =
      req.body as IUser;
    const newUser = await createUser({
      id,
      firstName,
      username,
      lastName,
      phone,
      email,
    });
    return res.status(200).send(newUser);
  } catch (error) {
    console.error(error);
  }
});

// READ

UserRouter.get("/:username", async (req: Request, res: Response) => {
  const { username } = req.params;

  if (username.includes(" ")) {
    return res.sendStatus(400);
  }

  const foundPost = await readUser(username);

  if (!foundPost) {
    return res.sendStatus(404);
  }

  res.status(200);

  return res.send(foundPost.toJSON());
});

// READ ALL
UserRouter.get("/", async (req: Request, res: Response) => {
  try {
    const allUsers = await readAllUsers();
    return res.send(allUsers);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

// Update user

UserRouter.put("/:oldUsername", async (req: Request, res: Response) => {
  try {
    const { oldUsername } = req.params;
    const { username, firstName, lastName, phone, email } = req.body as IUser;

    const foundUser = await readUser(oldUsername);

    if (!foundUser) {
      return res.sendStatus(404);
    }

    foundUser.firstName = firstName;
    foundUser.username = username;
    foundUser.lastName = lastName;
    foundUser.phone = phone;
    foundUser.email = email;

    if (
      !foundUser.firstName ||
      !foundUser.lastName ||
      !foundUser.phone ||
      !foundUser.email
    ) {
      return res.sendStatus(400).send("Missing required fields.");
    }

    const updatedUser = await foundUser.save();

    return res.status(200).send(updatedUser);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

// Delete User

UserRouter.delete("/:username", async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    if (username.includes(" ")) {
      return res.sendStatus(400);
    }

    const foundUser = await readUser(username);

    if (!foundUser) {
      return res.sendStatus(404);
    }

    await foundUser.destroy();

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});
