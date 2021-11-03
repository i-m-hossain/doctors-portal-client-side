import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

import { Button, Typography } from '@mui/material';

const AppointmentBanner = () => {
    const appointmentBg = {
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundBlendMode: 'darken, luminosity',
        backgroundColor: 'rgba(45, 58, 74, .6)',
        marginTop: 100,
    }
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} alt="" style={{ width: 400, marginTop: "-120px" }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    color: 'white',
                    display: "flex",
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems:"center"

                }}>
                    <Box>
                        <Typography sx={{ fontSize: 'h6.fontSize', mt: 5, color: '#00BFFF' , fontWeight:700}}>
                            Appointment
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div" sx={{ mt: 2 }}>
                            Make an appointment today!
                        </Typography>
                        <Typography variant="body2" color="text.white " style={{ fontSize: "14px", fontWeight: "300" }}>
                            It is a long established fact that a reader will be  distractedby the readable content of a page when looking at its
                        </Typography>
                        <Typography variant="body1" component="h2" sx={{ mt: 2 }}>
                            <Button variant="contained" style={{ background: "#00BFFF" }}>Learn more</Button>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
};

export default AppointmentBanner;