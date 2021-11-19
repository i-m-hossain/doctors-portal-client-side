import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Appointments = ({ date }) => {
    const { user, token } = useAuth()
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const url = `https://radiant-stream-52438.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`

        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [date, user.email, token])

    return (
        <div>
            <h3>Appoinments </h3>
            <TableContainer component={Paper}>
                <Table aria-label="appointment table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Service</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell align="center"> {appointment.serviceName}</TableCell>
                                <TableCell align="center"> {appointment.time}</TableCell>
                                <TableCell align="center">
                                    {
                                        appointment.payment ?
                                            'Paid'
                                            :
                                            <Button variant="contained" >
                                                <Link to={`/dashboard/payment/${appointment._id}`} style={{ color: '#fff' }} >  Pay
                                                </Link>
                                            </Button>
                                    }
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default Appointments;