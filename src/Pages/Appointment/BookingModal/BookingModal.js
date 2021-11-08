import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../../../hooks/useAuth'
import axios from 'axios';

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

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { user } = useAuth()
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }
    const handleBookSubmit = (e) => {

        //collect data
        const appointment = {
            ...bookingInfo,
            time: booking.time,
            serviceName: booking.name,
            date: date.toLocaleDateString()
        }
        //send data to the server
        axios.post('https://radiant-stream-52438.herokuapp.com/appointments', appointment)
            .then(res => {
                if (res.data.insertedId) {
                    handleBookingClose()
                    setBookingSuccess(true)
                };
            })
            .catch(error => console.log(error))


        e.preventDefault()

    }
    return (
        <div>
            <Modal
                open={openBooking}
                onClose={handleBookingClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {booking.name}
                    </Typography>
                    <form onSubmit={handleBookSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={booking.time}
                            size="small"
                            name='time'

                        ></TextField>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            name='patientName'
                            onBlur={handleOnBlur}
                        ></TextField>

                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                            name='email'
                            onBlur={handleOnBlur}
                        ></TextField>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            label="phone number"
                            type='number'
                            size="small"
                            name="phone"
                            onBlur={handleOnBlur}
                        ></TextField>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            name="data"

                        ></TextField>
                        <Button type="submit" variant="contained" sx={{ color: 'color.main' }} >Send</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;