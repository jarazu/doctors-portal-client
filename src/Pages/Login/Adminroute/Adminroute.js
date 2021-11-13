import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {
  Route, Redirect
} from "react-router-dom";

const Adminroute = ({ children, ...rest }) => {
    const {user, isLoading, checkAdmin} = useAuth();
    if(isLoading){
        return <CircularProgress/>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && checkAdmin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default Adminroute;
// export default Adminroute;