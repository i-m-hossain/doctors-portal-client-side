import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png'
import { BsTelephoneFill } from 'react-icons/bs';
import { Box } from '@mui/system';
const doctors = [
    {
        id: 1,
        name: 'Dr Caudi',
        phone: '+8801234234324',
        img: `${doctor}`
    },
    {
        id: 2,
        name: 'Dr Caudi',
        phone: '+8801234234234',
        img: `${doctor}`
    },
    {
        id: 3,
        name: 'Dr Caudi',
        phone: '+88012342342134',
        img: `${doctor}`
    },
]
const OurDoctors = () => {
    return (
        <Container>
            <Box style={{textAlign: "center"}}>
                <Typography variant="h3" sx={{ color: 'primary.main', my: 3 }}>
                    Our Doctors
                </Typography>
            </Box>
            <Grid container>
                {
                    doctors.map(doctor => 
                        <Grid item xs={12} md={4} key={doctor.id}>
                            <img src={doctor.img} alt="" width="180px" />
                            <Typography variant="h6">
                                {doctor.name}
                            </Typography>
                            <Typography variant="body" sx={{ color: 'text.disabled', textAlign: 'center'}}>
                                <BsTelephoneFill sx={{textAlign: 'center'}}/> {doctor.phone}
                            </Typography>
                        </Grid>
                    )
                }

            </Grid>
        </Container>
    );
};

export default OurDoctors;