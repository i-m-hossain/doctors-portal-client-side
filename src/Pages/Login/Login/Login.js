import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'
import { BsGoogle } from 'react-icons/bs'
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom'

const Login = () => {
    const { loginWithGoogle, loginWithEmail, user, isLoading, authError } = useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
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
        if (!loginData.email && !loginData.email) {
            alert("email and password shouldn't be empty");
            return;
        }
        if (loginData.email && loginData.password) {
            loginWithEmail(loginData.email, loginData.password, location, history)
        }

    }
    const handleLoginWithGoogle = () => {
        loginWithGoogle(history, location)
    }

    return (

        <Container >
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">{
                            !isLoading ? 'Login' : <CircularProgress style={{color: 'white'}} />
                        }</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>-----------OR-----------</p>
                    <Button variant="contained" onClick={handleLoginWithGoogle} sx={{ width: "75%", bgcolor: 'primary.main' }}> <BsGoogle style={{ color: '#DB4437', marginRight: "10px" }} /> Login with Google</Button>
                </Grid>
           
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;