import React, { useEffect, useState } from "react";
import { getVehicles } from "../api/vehicleApi";
import { Box, Container, CircularProgress, Alert, Typography } from "@mui/material";
import VehicleCard from "./VehicleCard";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await getVehicles();
                setVehicles(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching vehicles");
                setLoading(false);
            }
        };
        fetchVehicles();
    }, []);


    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;

    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Vehicle List</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
                {vehicles.map((vehicle) => (
                <Box key={vehicle._id}>
                    <VehicleCard
                    name={vehicle.name}
                    description={vehicle.description}
                    image={vehicle.image || '/path/to/default/image.jpg'}
                    />
                </Box>
                ))}
            </Box>
        </Container>
    );
};

export default VehicleList;