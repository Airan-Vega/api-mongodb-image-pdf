import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  title: String,
  description: String,
  pdfPath: String,
});

interface IPdf extends Document {
  title: string;
  description: string;
  pdfPath: string;
}

export default model<IPdf>("Pdf", schema);
