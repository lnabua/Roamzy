import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Home from "./pages/Home";
import VehicleList from "./components/VehicleList";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Box sx={{ bgcolor: "#f1f8e9", minHeight: "100vh" }}>
      <NavBar />
      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehicleList />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
