import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Home from "./pages/Home";
import VehicleList from "./components/VehicleList";
import NavBar from "./components/Navbar";
import CreateVehicle from "./pages/CreateVehicle";

const App = () => {
  return (
    <Box sx={{ bgcolor: "#f1f8e9", minHeight: "100vh" }}>
      <NavBar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/createvehicles" element={<CreateVehicle />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
