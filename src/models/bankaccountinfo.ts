import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./user";
class BankAccountInfo extends Model<
  InferAttributes<BankAccountInfo>,
  InferCreationAttributes<BankAccountInfo>
> {
  declare id: CreationOptional<number>;
  declare acc_number: string;
  declare clabe: string;
  declare bank: string;
  declare user_id: CreationOptional<number>;

  static associate(models: { User: typeof User }) {
    BankAccountInfo.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }
}

export const setupBankAccountInfo = (sequelize: Sequelize) => {
  BankAccountInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      acc_number: DataTypes.STRING,
      clabe: DataTypes.STRING,
      bank: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BankAccountInfo",
    }
  );
};

export default BankAccountInfo;
