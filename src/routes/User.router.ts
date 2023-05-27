import { Router, Request, Response } from "express";
import { IUser } from "../interfaces";
import { createUser, readAllUsers, readUser } from "../repositories/User.repo";

export const UserRouter = Router();

// POST
UserRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { firstName, userName, lastName, phone, email } = req.body as IUser;
    const newPost = await createUser({
      firstName,
      userName,
      lastName,
      phone,
      email,
    });
    return res.send(newPost);
  } catch (error) {
    console.error(error);
  }
});

// READ

UserRouter.get("/:userId", async (req: Request, res: Response) => {
  const params = req.params;

  const foundPost = await readUser(+params.userId);

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
