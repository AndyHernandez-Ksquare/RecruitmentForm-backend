import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./user";

class PersonnalInfo extends Model<
  InferAttributes<PersonnalInfo>,
  InferCreationAttributes<PersonnalInfo>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare last_name: string;
  declare second_last_name: string;
  declare gender: string;
  declare gender_other: string;
  declare date_of_birth: string;
  declare city_of_birth: string;
  declare state_of_birth: string;
  declare country_of_birth: string;
  declare user_id: CreationOptional<number>;
  static associate(models: { User: typeof User }) {
    PersonnalInfo.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }
}

export const setupPersonalInfo = (sequelize: Sequelize) => {
  PersonnalInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      second_last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      gender_other: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      city_of_birth: DataTypes.STRING,
      state_of_birth: DataTypes.STRING,
      country_of_birth: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "PersonalInfo",
    }
  );
};

export default PersonnalInfo;
