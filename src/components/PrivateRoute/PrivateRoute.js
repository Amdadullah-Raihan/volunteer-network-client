import { async } from '@firebase/util';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import Login from '../../components/Login/Login'

const auth = getAuth()

const PrivateRoute = ({ children }) => {
    const { user, handleGoogleSignIn} = useFirebase();
    const [isLoading, setIsLoading] = useState()

    const location = useLocation();
   
   
   if(!user?.email){
     return <div>
        <Login></Login>
     </div>
   }


    return user?.email && children 
    // : <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;