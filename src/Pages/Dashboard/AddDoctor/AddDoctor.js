import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Input } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    function clearFields(event) {
        Array.from(event.target).forEach((e) => (e.value = ""));
    }
    const handleFormSubmit = (e) => {
        if (!image) {
            return;
        }
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image);
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert('doctor is added is successfully')
                    clearFields(e)
                    setName('')
                    setEmail('')
                    setImage(null)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


    return (
        <div>
            <h3>Add doctor
            </h3>
            <form onSubmit={handleFormSubmit}>
                <TextField

                    id="standard-basic"
                    label="name"
                    variant="standard"
                    sx={{ width: '50%' }}
                    onChange={(e) => setName(e.target.value)}

                /> <br />
                <TextField
                    type="email"
                    id="standard-basic"
                    label="email"
                    variant="standard"
                    sx={{ width: '50%' }}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <Input
                    accept="image/png, image/jpg"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <br />

                <Button variant="contained" type="submit">
                    Add a doctor
                </Button>

            </form>
        </div>
    );
};

export default AddDoctor;