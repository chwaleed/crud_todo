import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const connnection = mongoose.connection;
    connnection.on("connected", () => {
      console.log("MongoDB Connected Successfully.");
    });
    connnection.on("error", () => {
      console.log("Falied to Connect MongoDb");
      process.exit();
    });
  } catch (error) {
    console.log("Something Went Wrong!");
    console.log(error);
  }
}
