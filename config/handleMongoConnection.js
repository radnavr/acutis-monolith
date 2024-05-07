import mongoose from "mongoose";

let isConnected = false;

export const handleMongoConnection = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB connection established...");
  } catch (error) {
    console.error(error);
  }
};
