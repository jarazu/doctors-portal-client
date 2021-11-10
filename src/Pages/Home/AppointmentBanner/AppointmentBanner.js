import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointmentbg from '../../../images/appointment-bg.png'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const setappointmentBanner = {
    background: `url(${appointmentbg})`,
    marginTop: 150,
    backgroundColor: 'rgb(0 0 0 / 48%)',
    backgroundBlendMode: 'darken, luminosity',
}
const AppointmentBanner = () => {
    return (
        <Box style={setappointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} alt=""  style={{width: 400, marginTop:'-110px'}}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{color: '#5ce7ed', display:'flex', 
                justifyContent:'flex-start', textAlign:'left', alignItems:'center'}} >
                    <Box>
                        <Typography variant="h6">
                            Appointment
                        </Typography>
                        <Typography variant="h6" style={{color: 'white', margin:'15px 0'}}>
                            Make an Appointment Today
                        </Typography>
                        <Typography style={{color: 'white', marginBottom:'15px'}} variant="subtitle1" gutterBottom component="div">
                            subtitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur
                        </Typography>
                        <Button variant="contained" style={{backgroundColor:'#5ce7ed'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;