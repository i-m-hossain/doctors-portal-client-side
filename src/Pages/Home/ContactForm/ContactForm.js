import { Button, Container, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';
import chair from '../../../images/chair.png'
const foooterBG = {
    background: `url(${chair})`,
    backgroundBlendMode: "darken, luminosity",
    backgroundColor: "rgba(0,0,0, .9)",
    color: "#fff"
}
const ContactForm = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("form submitted successfully");
    }
    return (
        <Container style={foooterBG} sx={{ py: 4, my:4, textAlign:'center'}}>
            <Typography variant="overline"> CONTACT US</Typography>
            <Typography variant="h4"> Always connect with us</Typography>
            <form onSubmit={handleFormSubmit} >
                <TextField
                    sx={{ width: '60%', my: 3 }}
                    id="outlined-size-small"
                    defaultValue="Email address"
                    size="small"
                    style={{background: "white"}}

                />
                <TextField
                    sx={{ width: '60%', mb: 3 }}
                    id="outlined-size-small"
                    defaultValue="Subject"
                    size="small"
                    style={{ background: "white" }}
                />
                
                <br />
                <TextareaAutosize
                    minRows={8}
                    minCols={10}
                    size="small"
                    placeholder="Your message"
                    style={{ width: "60%" }}
                />
                <br />
                <Button variant="contained" sx={{mt:2}}>Submit</Button>
            </form>
        </Container>
    );
};

export default ContactForm;