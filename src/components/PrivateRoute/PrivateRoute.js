import React from 'react';
import {Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const PrivateRoute = ({children}) => {
    const {user} = useFirebase();
    console.log(user);
    const location = useLocation();
   

    return user?.email ? children : <Navigate to='/login' state={{ from: location }} replace></Navigate>
    

};

export default PrivateRoute;