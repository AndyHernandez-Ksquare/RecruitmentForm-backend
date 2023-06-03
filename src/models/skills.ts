import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./user";
class Skills extends Model<
  InferAttributes<Skills>,
  InferCreationAttributes<Skills>
> {
  declare id: CreationOptional<number>;
  declare preferred_programming_language: string;
  declare experience: string;
  declare disability: string;
  declare user_id: CreationOptional<number>;

  static associate(models: { User: typeof User }) {
    Skills.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }
}

export const setupSkills = (sequelize: Sequelize) => {
  Skills.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      preferred_programming_language: DataTypes.STRING,
      experience: DataTypes.STRING,
      disability: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Skills",
    }
  );
};

export default Skills;
