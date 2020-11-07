import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index";
import path from "path";

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api", indexRoutes);

//This folder will be used to store public files
//Allows the browser to access the uploads folder and display one files of inside
//To show these files with the browser, we put the
//following url: http://localhost:4000/uploads/<filename with its extension>
//Example: http://localhost:4000/uploads/holamundo.pdf
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
