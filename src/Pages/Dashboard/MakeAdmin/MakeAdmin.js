import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Alert, Container, Grid, IconButton, Snackbar } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { token } = useAuth()
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    //handling on blur operation
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    //submitting form to api
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true)
                } else {
                    setError(true)
                }
            })
    }
    // closing snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
        setError(false);
    };
    return (
        <div>
            <h3>Make admin</h3>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                TransitionComponent="Fade"
                open={success || error}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                {
                    success && <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Admin is created successfully
                    </Alert>

                }
                {
                    error && <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        User does not exist
                    </Alert>
                }
            </Snackbar>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={handleOnBlur}
                />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;