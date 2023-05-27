import Post from "../models/Post";
import { IPost } from "../interfaces";
import User from "../models/user";

export const createPost = async ({
  userId,
  text,
}: IPost): Promise<Post | null> => {
  try {
    const response = await Post.create({
      userId,
      text,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readPost = async (id: number): Promise<Post | null> => {
  const response = await Post.findByPk(id);

  return response;
};

export const readAllPosts = async (): Promise<Post[] | null> => {
  try {
    const allUsers = await Post.findAll();
    return allUsers;
  } catch (error) {
    console.error(error);
    return null;
  }
};
