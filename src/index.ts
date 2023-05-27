import dotenv from "dotenv";
dotenv.config();
import { startDB } from "./db";
import app from "./app";
const URI_CONN = process.env.URI_CONN;
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    if (URI_CONN) {
      const sequelize = await startDB(URI_CONN);
      await sequelize.authenticate();
      await sequelize.sync();
      console.log(`App is up and running at port ${PORT}`);
    }
  } catch (error) {
    console.error(error);
    process.abort();
  }
});

// Commands to create and run seeds:
// 1. Create: npx sequelize-cli seed:generate --name (seed_name)
// 2. Run: npx sequelize-cli db:seed:all
// 3. Delete: npx sequelize-cli db:seed:undo

// Commands to create model (User example)
// 1. sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

// Commands to create and run migration
//1. Create: npx sequelize-cli db:migrate
// 2. Run: npx sequelize-cli db:migrate --env development
