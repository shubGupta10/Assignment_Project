import User from "../models/userModel.js"
import { sendThankYouEmail } from "../utils/emailService.js";

export const signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        await sendThankYouEmail(newUser.email);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const usersExist = await User.exists();
        if (!usersExist) {
            return res.status(404).json({ message: "User does not found in the database." });
        }
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User does not found." });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Failed to update user.", error: error.message });
    }
};
