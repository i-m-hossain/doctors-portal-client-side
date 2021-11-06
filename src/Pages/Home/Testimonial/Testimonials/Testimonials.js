import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import avatar1 from '../../../../images/people-1.png';
import avatar2 from '../../../../images/people-2.png';
import avatar3 from '../../../../images/people-3.png';
import TestimonialItem from '../TestimonialItem/TestimonialItem';
import bg from '../../../../images/quote-inverted.png'


const testimonials = [
    {
        id: 1,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab molestiae sequi, veritatis facilis quia modi itaque maiores aliquid cumque exercitationem deserunt aut officiis quisquam.',
        avatar: `${avatar1}`,
        name: "Winston Henry",
        address: 'califoria'
    },
    {
        id: 2,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab molestiae sequi, veritatis facilis quia modi itaque maiores aliquid cumque exercitationem deserunt aut officiis quisquam.',
        avatar: `${avatar2}`,
        name: "Winston Henry",
        address: 'califoria'
    },
    {
        id: 3,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab molestiae sequi, veritatis facilis quia modi itaque maiores aliquid cumque exercitationem deserunt aut officiis quisquam.',
        avatar: `${avatar3}`,
        name: "Winston Henry",
        address: 'califoria'
    },
]
// const testimonial = {
//     background: `url(${bg}) no-repeat fixed right`,
    
// }

const Testimonials = () => {
    return (
        <Container sx={{ flexGrow: 1 , my:5}} s>
            <Box style={{textAlign:'left', marginBottom:"10px"}}>
                <Typography variant="overline" style={{ fontWeight: 700 }}>
                    Testimonial
                </Typography>
                <Typography variant="h4">
                    What's our patient <br />
                    Say
                </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                {testimonials.map((testimonial, index) => (
                    <Grid item xs={12}  md={4} key={index}>
                        <TestimonialItem testimonial={testimonial}></TestimonialItem>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Testimonials;