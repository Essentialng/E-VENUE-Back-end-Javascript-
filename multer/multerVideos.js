"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "dev"); // change dev to tmp in production
    },
    filename: function (req, file, cb) {
        var uniqueIdentifier = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueIdentifier + "-" + file.originalname);
    },
});
var fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(mp4|mov|avi)$/i)) {
        return cb(null, false);
    }
    cb(null, true);
};
exports.upload = (0, multer_1.default)({ storage: storage, fileFilter: fileFilter });
//# sourceMappingURL=multerVideos.js.map