import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("connecdet");
  } catch (error) {}
};

export default db
