import { Router } from "express";
import {
  getPhotos,
  getPhoto,
  createPhoto,
  deletePhoto,
  updatePhoto,
} from "../controllers/photo.controller";

import { generatePDF } from "../controllers/pdf.controller";
import multer from "../libs/multer";

const router = Router();

router
  .route("/photos")
  .get(getPhotos)
  .post(multer.single("image"), createPhoto);
router
  .route("/photos/:id")
  .get(getPhoto)
  .delete(deletePhoto)
  .patch(updatePhoto);

router.route("/generatePDF").post(generatePDF);

export default router;
