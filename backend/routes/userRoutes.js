import express from "express";
import {signup, getAll, getUser, updateUser} from "../controllers/userControllers.js"

const router = express.Router();

router.post("/signup", signup);
router.get("/getall", getAll);
router.get("/getuser/:id", getUser);
router.put("/update/:id", updateUser);


export default router;