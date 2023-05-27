// import {User} from "../../types/global"
import User from "../models/user";
// import {User} from "../../dist/models/user"
import { IUser } from "../interfaces";

export const createUser = async ({
  id,
  firstName,
  username,
  lastName,
  phone,
  email,
}: IUser): Promise<User | null> => {
  try {
    const response = await User.create({
      id,
      firstName,
      username,
      lastName,
      phone,
      email,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const readUser = async (username: string): Promise<User | null> => {
  const response = await User.findOne({ where: { username } });

  return response;
};

export const readAllUsers = async (): Promise<User[] | null> => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    console.error(error);
    return null;
  }
};
