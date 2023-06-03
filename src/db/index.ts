import { Sequelize } from "sequelize";
import { setupUser } from "../models/user";
import { setupPersonalInfo } from "../models/personalinfo";
import { setupAddress } from "../models/address";
import { setupGovernmentInfo } from "../models/governmentInfo";
import { setupProfile } from "../models/profile";
import { setupAcademicInfo } from "../models/academicinfo";
import { setupAddressExtraInfo } from "../models/addressextrainfo";
import { setupFormalEducationInfo } from "../models/formaleducationinfo";
import { setupScholarshipInfo } from "../models/scholarshipInfo";
import { setupBankAccountInfo } from "../models/bankaccountinfo";

let sequelize: Sequelize;

export const startDB = async (url: string): Promise<Sequelize> => {
  sequelize = new Sequelize(url);
  setupUser(sequelize);
  setupPersonalInfo(sequelize);
  setupAddress(sequelize);
  setupAddressExtraInfo(sequelize);
  setupGovernmentInfo(sequelize);
  setupProfile(sequelize);
  setupAcademicInfo(sequelize);
  setupFormalEducationInfo(sequelize);
  setupScholarshipInfo(sequelize);
  setupBankAccountInfo(sequelize);

  return sequelize;
};
