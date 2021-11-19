import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddPeople = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        const clearField = e => {
            Array.from(e.target).forEach((e) => (e.value = ""));
        }


        fetch('http://localhost:5000/people', {
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
    return (
        <div>
            <h3>Add people with image</h3>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    onBlur={e => setName(e.target.value)} />
                <br />
                <TextField
                    type='email'
                    id="standard-basic"
                    label="Standard"
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