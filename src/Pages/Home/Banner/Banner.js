import React from 'react';
import Grid from '@mui/material/Grid'
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography, Box } from '@mui/material';
const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,
    }
    const verticalCenter = {
        display: 'flex', 
        alignItems: 'center',
        height: 400,
        
    }

    return (
        <Container style={bannerBg} sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ textAlign: "left", ...verticalCenter}}>
                    <Box>
                        <Typography variant="h4" sx={{ mt: 2 }}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ color: "text.disabled", my: 3, fontSize: "16px" }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur vitae nulla repellendus, eum ex architecto velit eos laboriosam quae? Corporis iste asperiores ad alias, adipisci laborum aperiam quas tenetur sunt.
                        </Typography>
                        <Button
                            variant="contained"
                            style={{ background: "#00BFFF" }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} alt="" width="350px" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;