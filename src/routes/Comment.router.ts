import { Router, Request, Response } from "express";
import { IComment } from "../interfaces";
import { createComment, readComment } from "../repositories/Comment.repo";
import Post from "../models/Post";
import User from "../models/user";

export const CommentRouter = Router();

// POST
CommentRouter.post("/:postId", async (req: Request, res: Response) => {
  try {
    const { text, userId } = req.body as IComment;

    const postId = Number(req.params.postId);
    const post = await Post.findByPk(postId);
    const user = await User.findByPk(userId);
    if (!post || !user) {
      return res.status(400).send("Invalid postId or userId");
    }

    const newPost = await createComment({ text, userId, postId });
    return res.send(newPost);
  } catch (error) {
    console.error(error);
  }
});

// READ

CommentRouter.get("/:postId", async (req: Request, res: Response) => {
  const { postId } = req.params;

  const foundPost = await readComment(+postId);

  if (foundPost?.length === 0) {
    return res.sendStatus(404);
  }

  res.status(200);

  return res.send(foundPost);
});
