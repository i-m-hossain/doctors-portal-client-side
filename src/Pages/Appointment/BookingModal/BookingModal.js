import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const handleBookSubmit = (e)=>{
        e.preventDefault()
        //collect data

        //send data to the server
        handleBookingClose()
        alert('submittng')
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
                        ></TextField>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="your name"
                            size="small"
                        ></TextField>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="phone number"
                            size="small"
                        ></TextField>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="email"
                            size="small"
                        ></TextField>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        ></TextField>
                        <Button type="submit" variant="contained" sx={{ color: 'color.main' }} >Send</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;