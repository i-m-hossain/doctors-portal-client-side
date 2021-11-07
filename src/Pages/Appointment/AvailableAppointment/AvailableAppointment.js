import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import BookingModal from '../BookingModal/BookingModal';
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <h2>Available Appointments in {date.toDateString()}</h2>
            {
                bookingSuccess && <Alert severity="success" sx={{my:2}}> Your appointment has been placed successfully</Alert>
            }
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                {bookings.map((booking, index) => (
                    <Grid item xs={6} sm={6} md={4} key={index}>
                        <Booking
                            date={date}
                            booking={booking}
                            key={booking.id}
                            setBookingSuccess={setBookingSuccess}
                        >
                        </Booking>
                    </Grid>

                ))}

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;