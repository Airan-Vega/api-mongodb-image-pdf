import multer from "multer";
import { v4 } from "uuid";
import path from "path";

//upload the images that are arriving to the uploads folder
const storage = multer.diskStorage({
  destination: "uploads",
  //Rename the files uploads
  filename: (req, file, cb) => {
    cb(null, v4() + path.extname(file.originalname));
  },
});

export default multer({ storage });
