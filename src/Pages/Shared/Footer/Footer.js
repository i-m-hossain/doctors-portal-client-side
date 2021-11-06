import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { ImFacebook } from 'react-icons/im';  
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import bg from '../../../images/footer-bg.png'
import {Link} from 'react-router-dom'
const footer ={
    background:`url(${bg})`, 
    backgroundPosition: 'center',
    marginTop:"50px",
    // padding: "30px 0"
}
const Footer = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={footer} sx={{color: 'text.disabled'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, md: 12 }}>
                <Grid item xs={12} md={3} sx={{mt:8}}>
                    <Typography variant="body2" sx={{textAlign: 'left'}}>
                        <Link style={{textDecoration: 'none'}}>Emergency Dental Care</Link> <br />
                        <Link style={{ textDecoration: 'none' }}>Check up </Link> <br />
                        Treatment of Personal Disease <br />
                        Tooth Extraction <br />
                        Check up
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h4" style={{ color: "cyan", marginBottom: "20px" }}>Services</Typography>
                    <Typography variant="body2" >
                        Emergency Dental Care <br />
                        Check up <br />
                        Treatment of Personal Disease <br />
                        Tooth Extraction <br />
                        Check up <br />
                        Check up <br />
                        Check up
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h4" style={{ color: "cyan", marginBottom: "20px"}}>Oral Health</Typography>
                    <Typography variant="body2">
                        Emergency Dental Care <br />
                        Check up <br />
                        Treatment of Personal Disease <br />
                        Tooth Extraction <br />
                        Check up <br />
                        Check up <br />
                        Check up
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h4" style={{ color: "cyan", marginBottom: "20px"}}>Our Address</Typography>
                    <Typography variant="body2">
                        New york -101010, Hudson <br />
                        Yards <br />
                    </Typography>
                    <Typography sx={{pt:1}}>
                        <ImFacebook style={{ border:"1px solid", borderRadius: '50%', padding: "3px", marginRight: '5px'}}/>
                        <AiOutlineGooglePlus style={{ border: "1px solid", borderRadius: '50%', padding: "3px", marginRight: '5px' }}/>
                        <BsTwitter style={{ border: "1px solid", borderRadius: '50%', padding: "3px" }}/>
                    </Typography>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Footer;