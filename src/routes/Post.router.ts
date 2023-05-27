import { Router, Request, Response } from "express";
import { createPost, readPost, readAllPosts } from "../repositories/Post.repo";
import { IPost } from "../interfaces";
import User from "../models/user";

export const PostRouter = Router();

// POST
PostRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, text } = req.body as IPost;
    const userExists = await User.findByPk(userId);

    if (!userExists) {
      return res.sendStatus(400);
    }
    const newPost = await createPost({ userId, text });
    return res.send(newPost);
  } catch (error) {
    console.error(error);
  }
});

// READ
PostRouter.get("/:postId/", async (req: Request, res: Response) => {
  const params = req.params;

  const foundPost = await readPost(+params.postId);

  if (!foundPost) {
    return res.sendStatus(404);
  }

  res.status(200);

  return res.send(foundPost.toJSON());
});

// READ ALL
PostRouter.get("/", async (req: Request, res: Response) => {
  try {
    const allUsers = await readAllPosts();
    return res.send(allUsers);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});
