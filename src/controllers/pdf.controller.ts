import { Request, Response } from "express";
import Pdf from "../models/PdfModel";
import path from "path";
import fs from "fs-extra";
import pdfkit from "pdfkit";

export async function generatePDF(req: Request, res: Response) {
  const doc = new pdfkit();

  const getPdfs = await Pdf.find();

  let namePDF = `${Math.random()}.pdf`;

  doc.pipe(fs.createWriteStream(`uploads/${namePDF}`));

  doc.text("Hola Mudo").fontSize(25);

  doc.end();

  console.log(`${path.resolve("uploads")}/${namePDF}`);

  const { title, description } = req.body;
  const newPdf = {
    title: title,
    description: description,
    pdfPath: `uploads/${namePDF}`,
  };

  const pdf = new Pdf(newPdf);
  await pdf.save();

  return res.json({
    message: "PDF successfully saved",
    namePDF,
  });
}
