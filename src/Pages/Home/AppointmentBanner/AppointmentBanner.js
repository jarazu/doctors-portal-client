import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointmentbg from '../../../images/appointment-bg.png'
import { Typography } from '@mui/material';

const setappointmentBg = {
    background: `url(${appointmentbg})`
}
const AppointmentBanner = () => {
    return (
        <Box style={setappointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{border:1}}>
                    <img src={doctor} alt=""  style={{width: 400}}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{border:1}}>
                    <Typography variant="h6">
                        Appointment
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;