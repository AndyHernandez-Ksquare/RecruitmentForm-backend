import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./user";
class Profile extends Model<
  InferAttributes<Profile>,
  InferCreationAttributes<Profile>
> {
  declare id: CreationOptional<number>;
  declare phone: string;
  declare country_code: string;
  declare email: string;
  declare alt_email: string;
  declare reference: string;
  declare other_reference: string;
  declare user_id: CreationOptional<number>;
  static associate(models: { User: typeof User }) {
    Profile.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }
}

export const setupProfile = (sequelize: Sequelize) => {
  Profile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      phone: DataTypes.STRING,
      country_code: DataTypes.STRING,
      email: DataTypes.STRING,
      alt_email: DataTypes.STRING,
      reference: DataTypes.STRING,
      other_reference: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
};

export default Profile;
