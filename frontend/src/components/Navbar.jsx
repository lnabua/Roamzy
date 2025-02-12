import { Typography, Container, AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position='static' sx={{ backgroundColor: "#f1f8e9" }}>
            <Container maxWidth="lg" sx={{ color: "black" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                    variant='h6'
                    noWrap
                    component={Link} to="/"
                    sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    }}>
                    Roamzy
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button color='inherit'>Login</Button>
                        <Button color='inherit'>Sign Up</Button>
                        <Button color='inherit' variant="outlined" sx={{ borderRadius: "20px" }} size='large'>Become a host</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

        // <div>
        //         {/* AppBar (Navigation Bar) */}
        //     <AppBar position="static">
        //         <Toolbar>
        //         <Typography variant="h6">Roamzy</Typography>
        //         <Button color="inherit" component={Link} to="/">
        //             Home
        //         </Button>
        //         <Button color="inherit" component={Link} to="/vehicles">
        //             Vehicles
        //         </Button>
        //         </Toolbar>
        //     </AppBar>
        // </div>
    );
};

export default NavBar;