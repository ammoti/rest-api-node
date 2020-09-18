import * as mongoose from "../../node_modules/mongoose";
import CONFIG from "./config";

mongoose.set("useCreateIndex", true);

// Connecting to the database
export default (async () => {
  try {
    console.log(CONFIG.DB_HOST)
    await mongoose.connect(CONFIG.DB_HOST, { useNewUrlParser: true });
    // listen for requests
    console.log("The Conection is Ok");
  } catch (err) {
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
  }
})();