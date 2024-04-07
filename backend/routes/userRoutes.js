import express from "express";
import { signup, getAll, getUser, updateUser } from "../controllers/userControllers.js";
import { sendThankYouEmail } from "../utils/emailService.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/getall", getAll);
router.get("/getuser/:id", getUser);
router.put("/update/:id", updateUser);
router.post("/send-thank-you-email", sendThankYouEmail);

export default router;
