import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { createVehicle } from '../api/vehicleApi';

const CreateVehicle = () => {
    const [vehicle, setVehicle] = useState({
        name: '',
        price: '',
        image: '',
    });

    // Handle input change
    const handleChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createVehicle(vehicle); // Call API function to send data
            alert("Vehicle created successfully!");
            setVehicle({ name: "", price: "", image: "" }); // Reset form
        } catch (error) {
            console.error("Error creating vehicle:", error);
            alert("Failed to create vehicle.");
        }
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            autoComplete="off"
        >
            <div>
                <TextField
                    name='name'
                    label='Name'
                    variant='outlined'
                    value={vehicle.name}
                    onChange={handleChange}
                    />
            </div>
            <div>
                <TextField
                    name='price'
                    label='Price'
                    variant='outlined'
                    value={vehicle.price}
                    onChange={handleChange}
                    />
            </div>
            <div>
                <TextField
                    name='image'
                    label='Image'
                    variant='outlined'
                    value={vehicle.image}
                    onChange={handleChange}
                    />
            </div>
            <Button type='submit' variant='contained' sx={{ m: 1 }}>
                Create Vehicle
            </Button>
        </Box>
    );
};

export default CreateVehicle;