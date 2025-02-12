import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const VehicleCard = ({ name, price, image }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={image}
            />
            <CardContent>
            <Typography gutterBottom variant="body1" component="div">
                {name}
            </Typography>
            <Typography variant="body2">
                {price}/night
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    )
}

export default VehicleCard;