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
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Appointments = ({date}) => {
    const { user, token } = useAuth()
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        
        fetch(url,{
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [date])
     
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
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="center"> {row.serviceName}</TableCell>
                                <TableCell align="center"> {row.time}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained">Not visited</Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;