import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { Box } from '@mui/system';
import axios from 'axios';

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const url = `https://radiant-stream-52438.herokuapp.com/doctors`
        axios.get(url)
            .then(res => setDoctors(res.data))
    }, [])
    return (
        <Container>
            <Box style={{ textAlign: "center" }}>
                <Typography variant="h3" sx={{ color: 'primary.main', my: 3 }}>
                    Our Doctors
                </Typography>
            </Box>
            <Grid container>
                {
                    doctors.map(doctor =>
                        <Grid item xs={12} md={4} key={doctor.id}>
                            <img src={`data:image/jpeg;base64,${doctor.image}`} alt="" width="180px" />
                            <Typography variant="h6">
                                {doctor.name}
                            </Typography>
                            {/* <Typography variant="body" sx={{ color: 'text.disabled', textAlign: 'center' }}>
                                <BsTelephoneFill sx={{ textAlign: 'center' }} /> {doctor.phone}
                            </Typography> */}
                        </Grid>
                    )
                }

            </Grid>
        </Container>
    );
};

export default OurDoctors;