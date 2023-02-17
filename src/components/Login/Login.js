import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {user,setUser,handleGoogleSignIn,handleSignOut} = useFirebase();
  

    // const handleRedirect = () =>{
    //   handleGoogleSignIn()
    //   .then(result=>{
    //     setUser(result.user)
    //     navigate(redirect_uri)
    //   })
    // }
    return (
        <div>
          <h1 className='text-2xl uppercase mb-2 '>Log in</h1>
          {
                user?.email ? 
                <button className="btn btn-outline " onClick={handleSignOut}>Log out</button>
                 : 
                 <button className="btn btn-outline " onClick={handleGoogleSignIn}>Log in with google</button>
          }
        </div>
    );
};

export default Login;