"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
//settings
app.set("port", process.env.PORT || 4000);
//middlewares
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.json());
//routes
app.use("/api", index_1.default);
//This folder will be used to store public files
//Allows the browser to access the uploads folder and display one files of inside
//To show these files with the browser, we put the
//following url: http://localhost:4000/uploads/<filename with its extension>
//Example: http://localhost:4000/uploads/holamundo.pdf
app.use("/uploads", express_1.default.static(path_1.default.resolve("uploads")));
exports.default = app;
