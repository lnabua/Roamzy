import React, { useEffect, useState } from "react";
import { getVehicles } from "../api/vehicleApi";
import { Box, Container, CircularProgress, Alert, Typography, Grid } from "@mui/material";
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
            <Grid container spacing={4}>
                {vehicles.map((vehicle) => (
                <Grid item key={vehicle._id} xs={12} sm={6} md={4}>
                    <VehicleCard
                    name={vehicle.name}
                    price={vehicle.price}
                    image={vehicle.image}
                    />
                </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default VehicleList;