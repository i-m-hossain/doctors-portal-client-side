import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdDashboard } from 'react-icons/md'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineNoteAdd } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { Button, Grid } from '@mui/material';
import Calender from '../../Shared/Calendar/Calender';
import Appointments from '../Appointments/Appointments';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date())

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // const icons = ['MdDashboard', 'AiOutlineCalendar', 'FiSettings', 'MdOutlineNoteAdd', 'BsPeopleFill' ]
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link to="/appointment">Appointment</Link>
                    </ListItemText>
                </ListItem>
                {['DashBoard', 'Appointment', 'Patients', 'Prescriptions', 'Setting'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard -- Doctors portal
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Grid container spacing={{ xs: 2, md: 3 }}>

                    <Grid item xs={12} md={5} >
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Appointments date={date}></Appointments>,
                    </Grid>

                </Grid>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
