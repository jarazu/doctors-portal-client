import React, {useState} from 'react';
import {TextField, Button, Alert } from '@mui/material';
import { SetMeal } from '@mui/icons-material';
// import useAuth from '../../../hooks/useAuth';
import useAuth from '../../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const user = {email};
    const handleAdminSubmit = e => {
        e.preventDefault();
        // fetch('http://localhost:5000/users/admin', {
        fetch('https://evening-peak-97843.herokuapp.com/users/admin', {
            method: 'put',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                setEmail('');
                setSuccess(true);
            }
        })
    }
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{width: '50%'}} type="email" label="Email" name="email" variant="standard" onBlur={handleOnBlur}/>
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make admin successfull</Alert> }
        </div>
    );
};

export default MakeAdmin;