import { Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddPeople = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)
    const [people, setPeople] = useState([])
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        const clearField = e => {
            Array.from(e.target).forEach((e) => (e.value = ""));
        }


        fetch('https://radiant-stream-52438.herokuapp.com/people', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('person is added successfully')
                    clearField(e)
                    setName('')
                    setEmail('')
                    setImage(null)
                };

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        axios.get('https://radiant-stream-52438.herokuapp.com/people')
            .then(res => {
                console.log(res.data);
                setPeople(res.data)
            })
    }, [success])
    return (
        <div>

            <Container>
                <Box style={{ textAlign: "center" }}>
                    <Typography variant="h3" sx={{ color: 'primary.main', my: 3 }}>
                        Added people
                    </Typography>
                </Box>
                <Grid container>
                    {
                        people.map(row =>
                            <Grid item xs={12} md={4} key={row.id}>
                                <img src={`data:image/jpeg;base64,${row.image}`} alt="" width="180px" />
                                <Typography variant="h6">
                                    {row.name}
                                </Typography>
                            </Grid>
                        )
                    }

                </Grid>
            </Container>
            <h3>Add people with image</h3>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    onBlur={e => setName(e.target.value)} />
                <br />
                <TextField
                    type='email'
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    onBlur={e => setEmail(e.target.value)} />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])} />
                <br />
                <Button type="submit"> Add People</Button>
                {
                    success && <p style={{ color: 'green' }}> {success}</p>
                }
            </form>
        </div>
    );
};

export default AddPeople;