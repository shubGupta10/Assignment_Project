import { User } from "../models/userModel.js";


export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log("Creation failed", error);
        res.status(400).json({ message: "Failed to create user", error: error.message });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user with the provided email exists....
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the provided password matches the stored password....
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};