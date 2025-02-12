import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import VehicleList from '../components/VehicleList';

const Home = () => {
  return (
    <Container sx={{ backgroundColor: "#f1f8e9" }}>
      <Typography variant="h4" gutterBottom>
        Start your adventure
      </Typography>
      <VehicleList /> {/* Display VehicleList here */}
    </Container>
  );
};

export default Home;
