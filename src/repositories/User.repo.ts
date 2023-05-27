// import {User} from "../../types/global"
import User from "../models/user";
// import {User} from "../../dist/models/user"
import { IUser } from "../interfaces";

export const createUser = async ({
  firstName,
  userName,
  lastName,
  phone,
  email,
}: IUser): Promise<User | null> => {
  try {
    const response = await User.create({
      firstName,
      userName,
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

export const readUser = async (id: number): Promise<User | null> => {
  const response = await User.findByPk(id);

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
