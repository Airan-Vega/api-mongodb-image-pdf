"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function startConnection() {
    await mongoose_1.default.connect("mongodb://localhost:27017/pruebaPDF", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database is connected");
}
exports.startConnection = startConnection;
