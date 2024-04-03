import express from "express";
import {createUser, getAllUsers, getUserById, updateUser} from "../controllers/userControllers.js"

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);


export default router;