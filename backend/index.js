import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import vehicleRoutes from './routes/vehicleRoutes.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); //allows us to accept JSON data in the req.body

app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 3000;

// Start Server
app.listen(PORT, () => {
    connectDB(); // Connect to MongoDB
    console.log('Server started at http://localhost:' + PORT);
});

