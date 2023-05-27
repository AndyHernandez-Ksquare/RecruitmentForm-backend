import { Model, DataTypes, Sequelize } from "sequelize";
import { IUser } from "../interfaces";

class User extends Model<IUser> {}

export const setupUser = (sequelize: Sequelize) => {
  User.init(
    {
      username: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
};

export default User;
