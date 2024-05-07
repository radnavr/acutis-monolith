import mongoose from "mongoose";

export const handleMongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(error);
  }
};
