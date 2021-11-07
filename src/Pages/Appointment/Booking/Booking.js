import { Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setOpenBooking] = useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (

        <>
            <Paper sx={{ p: 4, boxShadow: 1 }} elevation={3}>
                <Typography sx={{ color: 'info.main' }} variant="h4" gutterBottom>
                    {booking.name}
                </Typography>
                <Typography gutterBottom>
                    {booking.time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    Available sits: {booking.space}
                </Typography>
                <Button variant="contained" onClick={handleBookingOpen}> BOOK APPOINTMENT </Button>
            </Paper>
            <BookingModal

                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>
    );
};

export default Booking;