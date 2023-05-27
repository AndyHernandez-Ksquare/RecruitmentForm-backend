import Comment from "../models/Comments";
import { IComment } from "../interfaces";

export const createComment = async ({
  text,
  userId,
  postId,
}: IComment): Promise<Comment | null> => {
  try {
    const response = await Comment.create({
      text,
      userId,
      postId,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readComment = async (
  postId: number
): Promise<Comment[] | null> => {
  const response = await Comment.findAll({ where: { postId: postId } });

  return response;
};
