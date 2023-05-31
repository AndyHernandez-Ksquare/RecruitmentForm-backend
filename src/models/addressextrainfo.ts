import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import Address from "./address";
class AddressExtraInfo extends Model<
  InferAttributes<AddressExtraInfo>,
  InferCreationAttributes<AddressExtraInfo>
> {
  declare id: CreationOptional<number>;
  declare type_of_residency: string;
  declare other_residency: string;
  declare people: string;
  declare address_id: CreationOptional<number>;

  static associate(models: { Address: typeof Address }) {
    Address.belongsTo(models.Address, {
      foreignKey: "address_id",
      as: "address",
    });
  }
}

export const setupAddressExtraInfo = (sequelize: Sequelize) => {
  AddressExtraInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type_of_residency: DataTypes.STRING,
      other_residency: DataTypes.STRING,
      people: DataTypes.STRING,
      address_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AddressExtraInfo",
    }
  );
};
export default AddressExtraInfo;
