import { toDate } from 'date-fns';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Container } from '@mui/material';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time:'08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time:'09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time:'09.00 AM - 10.00 AM',
        space: 3
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time:'10.00 AM - 11.00 AM',
        space: 9
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time:'06.00 PM - 07.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time:'07.00 PM - 08.00 PM',
        space: 10
    }
]
const AvailableAppointments = ({date}) => {    
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{color:'info.main', py:5, fontWeight: 600}} variant="h4">Available Appointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking Successfull</Alert> }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={Booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess} />)
                }
                
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;