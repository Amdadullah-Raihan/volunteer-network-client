import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import Home from '../Home/Home'


const PrivateDashboard = ({ children }) => {
    const { user } = useFirebase();
    console.log(user);
    const location = useLocation();




    if (!user?.email) {
        return <Home/>
    }

    return user.email && children 



};

export default PrivateDashboard;