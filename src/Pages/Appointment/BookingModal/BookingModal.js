import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({open, handleClose, booking, date, setBookingSuccess}) => {
    const {name, time} = booking;
    const {user} = useAuth();
    const initialInfo = {displayName: user.displayName, email: user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleBookSubmit = e => {
        const appointMent = {...bookingInfo, time, serviceName: name, date: date.toLocaleDateString()}

        fetch('https://evening-peak-97843.herokuapp.com/appointments', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointMent)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setBookingSuccess(true);
                handleClose();
            }
        })

        e.preventDefault();
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }
    return (
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
            </Typography>
            <form>
                <TextField
                disabled 
                id="outlined-size-small"
                defaultValue={time}
                sx={{width: '90%', my:1}}
                size="small"
                />
                <TextField
                id="outlined-size-small"
                sx={{width: '90%', my:1}}
                size="small"
                defaultValue={user.displayName}
                name="displayName"
                onBlur={handleOnBlur}
                />
                <TextField
                id="outlined-size-small"
                defaultValue={user.email}
                sx={{width: '90%', my:1}}
                size="small"
                name="email"
                onBlur={handleOnBlur}
                />
                <TextField
                id="outlined-size-small"
                defaultValue='Your Phone Number'
                sx={{width: '90%', my:1}}
                size="small"
                name="phone"
                onBlur={handleOnBlur}
                />
                <TextField
                disabled
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                sx={{width: '90%', my:1}}
                size="small" 
                />
                <Button type="submit" variant="contained" onClick={handleBookSubmit }>Submit</Button>
            </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;