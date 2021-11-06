import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: "400px"

}

const ExceptionalCare = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 2 }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} sx={{ textAlign: "left" }}>
                    <img src={treatment} alt="" width="400px" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ textAlign: "left" }} style={verticalCenter}>
                    <Box>
                        <Typography variant="h4">
                            Exceptional Dental <br />
                            Care, on Your Terms
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: "left", my: 2 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora libero esse commodi modi! Laudantium quo asperiores nulla molestiae, veniam voluptas earum voluptatibus dolore fuga odio necessitatibus sequi culpa repellendus?
                        </Typography>
                        <Button variant="contained">Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExceptionalCare;