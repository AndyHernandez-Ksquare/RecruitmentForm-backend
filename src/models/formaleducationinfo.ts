import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./user";
class FormalEducationInfo extends Model {
  declare id: CreationOptional<number>;
  declare university_name: string;
  declare state: string;
  declare country: string;
  declare career_name: string;
  declare classes_completed: boolean;
  declare proof_classes_completed: string;
  declare degree_completed: boolean;
  declare proof_degree_completed: string;
  declare license_completed: boolean;
  declare proof_license_completed: string;
  declare user_id: CreationOptional<number>;

  static associate(models: { User: typeof User }) {
    FormalEducationInfo.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }
}
export const setupFormalEducationInfo = (sequelize: Sequelize) => {
  FormalEducationInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      university_name: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      career_name: DataTypes.STRING,
      classes_completed: DataTypes.BOOLEAN,
      proof_classes_completed: DataTypes.STRING,
      degree_completed: DataTypes.BOOLEAN,
      proof_degree_completed: DataTypes.STRING,
      license_completed: DataTypes.BOOLEAN,
      proof_license_completed: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "formalEducationInfo",
    }
  );
};

export default FormalEducationInfo;
