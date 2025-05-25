import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(proces.env.MongoDBUrl);
  } catch (error) {
    throw new Error("Connection Failed");
  }
};
