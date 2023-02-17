import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const PrivateDashboard = ({ children }) => {
    const { user } = useFirebase();
    console.log(user);
    const location = useLocation();




    if (!user?.email) {
        return <p>Loadding...</p>
    }

    return user.email ? children : <Navigate to='/' state={{ from: location }} replace></Navigate>



};

export default PrivateDashboard;