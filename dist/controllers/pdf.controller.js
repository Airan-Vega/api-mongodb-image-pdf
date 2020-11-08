"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF = void 0;
const PdfModel_1 = __importDefault(require("../models/PdfModel"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const pdfkit_1 = __importDefault(require("pdfkit"));
async function generatePDF(req, res) {
    const doc = new pdfkit_1.default();
    const getPdfs = await PdfModel_1.default.find();
    let namePDF = `${Math.random()}.pdf`;
    doc.pipe(fs_extra_1.default.createWriteStream(`uploads/${namePDF}`));
    doc.text("Hola Mudo").fontSize(25);
    doc.end();
    console.log(`${path_1.default.resolve("uploads")}/${namePDF}`);
    const { title, description } = req.body;
    const newPdf = {
        title: title,
        description: description,
        pdfPath: `uploads/${namePDF}`,
    };
    const pdf = new PdfModel_1.default(newPdf);
    await pdf.save();
    return res.json({
        message: "PDF successfully saved",
        namePDF,
    });
}
exports.generatePDF = generatePDF;
