import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
const services = [
    {
        name: "Fluoride Treatment",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ducimus provident minima pariatur modi sequi error quod dolores ipsum assumenda?",
        img: fluoride

    },
    {
        name: "Cavity filling",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ducimus provident minima pariatur modi sequi error quod dolores ipsum assumenda?",
        img: cavity

    },
    {
        name: "Fluride Treatment",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ducimus provident minima pariatur modi sequi error quod dolores ipsum assumenda?",
        img: whitening

    },

]

const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m:2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, mb:8 }} variant="h6" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service, index) =>
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <Service key={service.name} service={service}></Service>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;