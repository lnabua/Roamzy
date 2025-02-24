import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) return res.status(400).json({ message: "User already exists" });
        const user = await User.create({ name, email, password });

        res.status(201).json({ user, message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const logout = async (req, res) => {
    res.send("Logout route called");
}