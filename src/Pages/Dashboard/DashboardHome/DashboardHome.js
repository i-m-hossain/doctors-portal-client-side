import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calendar/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>

            <Grid item xs={12} md={5} >
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
                <Appointments date={date}></Appointments>,
            </Grid>

        </Grid>
    );
};

export default DashboardHome;