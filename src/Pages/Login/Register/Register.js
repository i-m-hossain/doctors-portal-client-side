import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
import { BsGoogle } from 'react-icons/bs'
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { loginWithGoogle, registerWithEmail, isLoading, user, authError } = useAuth()
    const history = useHistory()

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            alert('Input value should not be empty')
            return;
        }
        if (loginData.password !== loginData.password2) {
            alert('Passwords are not same')
            return;
        }
        if (loginData.email && loginData.password) {
            registerWithEmail(loginData.email, loginData.password, history)
        }

    }
    const handleLoginWithGoogle = () => {
        loginWithGoogle(history)
    }

    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}  >

                    <Typography variant="body1" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                        Register
                    </Typography>
                    
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                label="Email"
                                variant="standard"
                                size="small"
                                sx={{ width: "75%", mb: 2 }}
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                            />

                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                label='Type password'
                                type="password"
                                variant="standard"
                                size="small"
                                sx={{ width: "75%", mb: 2 }}
                                name="password"
                                onChange={handleOnChange}
                            />

                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                label="Retype your password"
                                type="password"
                                variant="standard"
                                size="small"
                                sx={{ width: "75%", mb: 2 }}
                                name="password2"
                                onChange={handleOnChange}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: "75%", mb: 2 }}

                            >
                                {
                                    !isLoading ? ' Register' : <CircularProgress style={{color: 'white'}}/>
                                }
                            </Button>
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <Button variant="text">
                                    Already registered? Please login.
                                </Button>
                            </NavLink>
                        </form>
                
                    
                    {
                        user?.email && <Alert severity="success"> User is created successfully</Alert>
                    }
                    {
                        authError && <div style={{display: 'flex', justifyContent:'center'}}><Alert severity="error" sx={{ width: "75%", mb: 2 }}> {authError.split(':')[1]}</Alert></div>
                    }


                    <Container  >
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            --------------- OR ----------------
                        </Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid xs={12} md={12} item>

                                <Button variant="contained" onClick={handleLoginWithGoogle} sx={{ width: "75%", bgcolor: 'primary.main' }}> <BsGoogle style={{ color: '#DB4437', marginRight: "10px" }} /> Login with Google</Button>
                            </Grid>
                        </Grid>
                    </Container>


                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: "100%" }} />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Register;