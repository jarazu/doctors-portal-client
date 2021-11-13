import { Container, TextField, Typography, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import loginImg from '../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {isLoading, user, loginUserByEmailPass, loginByGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUserByEmailPass(loginData.email, loginData.password, location, history)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleLogin = () => {
        loginByGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt:8}} variant="body1" gutterBottom>
                        Login
                        {
                            !isLoading &&
                            <form action="" onSubmit={handleLoginSubmit}>
                                <TextField sx={{width:'75%', my:1}} id="email" label="Your Email" variant="standard" name="email" onChange={handleOnChange} />

                                <TextField sx={{width:'75%', my:1}} id="password" label="Your Password" variant="standard" type="password" name="password" onChange={handleOnChange} />
                                
                                <Button type="submit" sx={{width:'75%', mt:0}} variant="contained">Login</Button>
                                
                                <NavLink to="/register" style={{textDecoration: 'none'}}>
                                    <Button  sx={{width:'75%', mt:1}} variant="text">New user? Please Signup</Button>
                                </NavLink>
                            </form>
                        }
                        {
                            isLoading && <CircularProgress />
                        }
                        
                        <Button onClick={handleGoogleLogin} sx={{width:'75%', mt:0}} variant="contained">Google Login</Button>
                                
                    </Typography>
                </Grid>
                <Grid item  xs={12} md={6}>
                    <img src={loginImg} alt="" style={{width:'100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;