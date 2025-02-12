import mongoose from 'mongoose';
import Vehicle from '../models/Vehicle.js';

// GET ALL VEHICLES
export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({});
        res.status(200).json({ success: true, data: vehicles });
    } catch (error) {
        console.error('Error in fetching vehicles:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// CREATE A VEHICLE
export const createVehicle = async (req, res) => {
    const vehicle = req.body;

    if (!vehicle.name || !vehicle.price || !vehicle.image) {
        return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }

    const newVehicle = new Vehicle(vehicle);

    try {
        await newVehicle.save();
        res.status(201).json({ success: true, data: newVehicle });
    } catch (error) {
        console.error('Error in creating vehicle:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// UPDATE A VEHICLE
export const updateVehicle = async (req, res) => {
    const { id } = req.params;

    const vehicle = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Vehicle ID' });
    }

    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(id, vehicle, {new: true});
        res.status(200).json({ success: true, data: updatedVehicle });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// DELETE A VEHICLE
export const deleteVehicle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Vehicle ID' });
    }
    
    try {
        await Vehicle.findByIdAndDelete(id);
        res.status(201).json({ success: true, message: 'Vehicle deleted' });
    } catch (error) {
        console.error('Error in deleting vehicle:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
