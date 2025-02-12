import express from 'express';
import { createVehicle, deleteVehicle, getVehicles, updateVehicle } from '../controllers/vehicleController.js';

const router = express.Router();

// GET ALL PRODUCTS
router.get('/', getVehicles);

// CREATE A VEHICLE
router.post('/', createVehicle);

// UPDATE A VEHICLE
router.put('/:id', updateVehicle);

// DELETE A VEHICLE
router.delete('/:id', deleteVehicle);

export default router;