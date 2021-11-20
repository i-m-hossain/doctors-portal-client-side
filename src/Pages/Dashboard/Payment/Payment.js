import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Checkout from './Checkout';

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        axios.get(`https://radiant-stream-52438.herokuapp.com/appointments/${appointmentId}`)
            .then(res => setAppointment(res.data))

    })
    return (
        <div>
            <h2>Please pay for {appointment.serviceName}</h2>

            <Typography variant="caption" display="block" gutterBottom>
                Price: ${appointment.price}
            </Typography>
            {
                appointment.price && <Checkout
                    appointment={appointment}
                />
            }
        </div>
    );
};

export default Payment;