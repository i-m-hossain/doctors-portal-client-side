import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth()
    let location = useLocation();
    if (isLoading) {

        return <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <CircularProgress />
        </div>
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
    // return (
    // <Route
    //     {...rest}
    //     render={({ location }) =>
    //         user?.email ? (
    //             children
    //         ) : (
    //             <Redirect
    //                 to={{
    //                     pathname: "/login",
    //                     state: { from: location }
    //                 }}
    //             />
    //         )
    //     }
    // />
    // );
};

export default PrivateRoute;