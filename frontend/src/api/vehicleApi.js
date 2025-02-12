import axiosClient from './axiosClient';

// GET ALL VEHICLES
export const getVehicles = async () => {
    try {
        const response = await axiosClient.get('/vehicles');
        return response.data;
    } catch (error) {
        console.error('Error in fetching vehicles:', error);
        throw error;
    }
};

// CREATE A VEHICLE
export const createVehicle = async (vehicle) => {
    try {
        const response = await axiosClient.post('/vehicles', vehicles);
        return response.data;
    } catch (error) {
        console.error('Error creating vehicle:', error);
        throw error;
    }
};