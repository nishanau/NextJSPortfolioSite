import mongoose from "mongoose";
const  Connect = async () => {
  try {
    await mongoose.connect(process.env.MongoDBUrl);
  } catch (error) {
    console.log(error.message)
    throw new Error("Connection Failed");
  }
};
export default Connect;