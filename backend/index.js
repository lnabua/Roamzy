import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config(); // Load environment variables

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json()); //allows us to accept JSON data in the req.body

app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 5001;

// Start Server
app.listen(PORT, () => {
    connectDB(); // Connect to MongoDB
    console.log(`Server started at http://localhost:${PORT}`);
});

