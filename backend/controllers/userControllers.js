import { User } from "../models/userModel";


export const createUser = async(res,req) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const getAllUsers = async (req, res) => {
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


export const getUserById = async (req, res) => {
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


export const updateUser = async (res,req) => {
    try {
        const userExist =  await User.exists();
        if(!userExist){
            return res.status(404).json({message: "User does not found in the database."})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}