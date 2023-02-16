import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {user,handleGoogleSignIn,handleSignOut} = useFirebase();
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