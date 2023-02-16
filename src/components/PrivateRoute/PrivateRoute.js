import React from 'react';
import {Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children}) => {
    const isLogged = true;
    const location = useLocation();


    return isLogged ? children : <Navigate to='/' state={{ from: location }} replace></Navigate>
    

};

export default PrivateRoute;