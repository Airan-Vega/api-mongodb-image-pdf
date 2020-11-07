import mongoose from "mongoose";

export async function startConnection() {
  await mongoose.connect("mongodb://localhost:27017/pruebaPDF", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database is connected");
}
