import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useFirebase();
    const location = useLocation();


    if (isLoading) {
        return <p>Laodding...</p>
    }


    return user?.email ? children : <Navigate to='/' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;