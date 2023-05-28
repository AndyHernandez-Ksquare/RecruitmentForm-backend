import { Sequelize } from "sequelize";
import { setupPost } from "../models/Post";
import { setupUser } from "../models/user";
import { setupComment } from "../models/Comments";
import { setupPersonalInfo } from "../models/personalinfo";
import { setupAddress } from "../models/address";

let sequelize: Sequelize;

export const startDB = async (url: string): Promise<Sequelize> => {
  sequelize = new Sequelize(url);
  setupUser(sequelize);
  setupPersonalInfo(sequelize);
  setupAddress(sequelize);
  setupPost(sequelize);
  setupComment(sequelize);
  return sequelize;
};
