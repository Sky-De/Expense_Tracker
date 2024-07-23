import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.DB_URL ? process.env.DB_URL : ""
    );
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
