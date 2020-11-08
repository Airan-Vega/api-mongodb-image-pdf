"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getPhoto = exports.getPhotos = void 0;
const PhotoModel_1 = __importDefault(require("../models/PhotoModel"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getPhotos(req, res) {
    const photos = await PhotoModel_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await PhotoModel_1.default.findById(id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createPhoto(req, res) {
    const { title, description } = req.body;
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path,
    };
    const photo = new PhotoModel_1.default(newPhoto);
    await photo.save();
    return res.json({
        message: "Photo successfully saved",
        photo,
    });
}
exports.createPhoto = createPhoto;
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await PhotoModel_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.json({ message: "Photo Deletes", photo });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatePhoto = await PhotoModel_1.default.findByIdAndUpdate(id, { title, description });
    return res.json({
        message: "Successfully Updated",
        updatePhoto,
    });
}
exports.updatePhoto = updatePhoto;
