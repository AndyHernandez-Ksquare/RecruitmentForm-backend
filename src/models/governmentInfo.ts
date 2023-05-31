"use strict";

import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./user";

class GovernmentInfo extends Model<
  InferAttributes<GovernmentInfo>,
  InferCreationAttributes<GovernmentInfo>
> {
  declare id: CreationOptional<number>;
  declare CURP: string;
  declare identification_number: string;
  declare user_id: CreationOptional<number>;
  static associate(models: { User: typeof User }) {
    GovernmentInfo.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }
}
export const setupGovernmentInfo = (sequelize: Sequelize) => {
  GovernmentInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CURP: DataTypes.STRING,
      identification_number: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GovernmentInfo",
    }
  );
};

export default GovernmentInfo;
