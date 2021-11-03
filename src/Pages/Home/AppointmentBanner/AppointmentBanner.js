import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../../images/doctor.png'

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <img src={img} alt="" width="400px" />
                </Grid>
                <Grid item xs={6} md={4}>
                    
                </Grid>
            </Grid>
        </Box>

    );
};

export default AppointmentBanner;       