import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./user";
class AcademicInfo extends Model {
  declare id: CreationOptional<number>;
  declare software_devel_comments: string;
  declare degree_level: string;
  declare informal_education: string;
  declare other_education: string;
  declare user_id: CreationOptional<number>;
  static associate(models: { User: typeof User }) {
    AcademicInfo.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}

export const setupAcademicInfo = (sequelize: Sequelize) => {
  AcademicInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      software_devel_comments: DataTypes.STRING,
      degree_level: DataTypes.STRING,
      informal_education: DataTypes.STRING,
      other_education: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AcademicInfo",
    }
  );
};

export default AcademicInfo;
