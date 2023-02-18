import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
  const { user, setUser, handleGoogleSignIn, handleSignOut } = useFirebase();


  // const handleRedirect = () =>{
  //   handleGoogleSignIn()
  //   .then(result=>{
  //     setUser(result.user)
  //     navigate(redirect_uri)
  //   })
  // }
  return (
    
      <div className=' w-full form-control max-w-[570px] mx-auto  min-h-[570px] bg-[#F4F7FC] border flex flex-col justify-center lg:mt-28 items-center shadow-lg px-12' >
        {
          user?.email ? <p className='mb-8 text-2xl'>{user.email}</p>: <p className='text-2xl mb-8 uppercase'>Log in</p>
        }
        
        {
          user?.email ?
            <button className="btn  w-full rounded-3xl	" onClick={handleSignOut}>Log out</button>
            :
            <button className="btn  w-full rounded-3xl	" onClick={handleGoogleSignIn}>Log in with google</button>
        }
        <p className='mt-4 '>Don't have and account? <span className='text-blue-500 '>Create account</span></p>
      </div>
    
  );
};

export default Login;