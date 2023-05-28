import { Sequelize } from "sequelize";
import { setupUser } from "../models/user";
import { setupPersonalInfo } from "../models/personalinfo";
import { setupAddress } from "../models/address";
import { setupAddressExtraInfo } from "../models/addressextrainfo";
import { setupProfile } from "../models/profile";
import { setupAcademicInfo } from "../models/academicinfo";

let sequelize: Sequelize;

export const startDB = async (url: string): Promise<Sequelize> => {
  sequelize = new Sequelize(url);
  setupUser(sequelize);
  setupPersonalInfo(sequelize);
  setupAddress(sequelize);
  setupAddressExtraInfo(sequelize);
  setupProfile(sequelize);
  setupAcademicInfo(sequelize);

  return sequelize;
};
