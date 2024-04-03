import  express  from "express";
import { upload } from "../middlewares/multer.js";
import { uploadProfilePicture } from "../controllers/profileController.js";

const router = express.Router();


router.post("/upload", upload.single("profilePicture"), uploadProfilePicture);

export default router;