import React, { useEffect, useState } from "react";
import { getVehicles } from "../api/vehicleApi";
import { Container } from "@mui/material";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await getVehicles();
                setVehicles(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching vehicles');
                setLoading(false);
            }
        };
        fetchVehicles();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <Container>
            <h2>Vehicle List</h2>
            <ul>
                {vehicles.map((vehicle) => (
                    <li key={vehicle._id}>{vehicle.name}</li>
                ))}
            </ul>   
        </Container>
    );
};

export default VehicleList;