import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://user21:usertwoone@tm.ftekjyn.mongodb.net/?retryWrites=true&w=majority&appName=tm", {
      dbName: "MERN_STACK_TASK_MANAGEMENT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};
