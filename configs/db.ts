const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
    console.log("Connect DB Successfully ...");
  } catch (error) {
    console.log("Error In DB Connection ...");
  }
};

export default dbConnection;
