"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
//upload the images that are arriving to the uploads folder
const storage = multer_1.default.diskStorage({
    destination: "uploads",
    //Rename the files uploads
    filename: (req, file, cb) => {
        cb(null, uuid_1.v4() + path_1.default.extname(file.originalname));
    },
});
exports.default = multer_1.default({ storage });
