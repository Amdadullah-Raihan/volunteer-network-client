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
    <div className=' form-control max-w-[570px] mx-auto mt-40 min-h-[570px] bg-[#F4F7FC] border flex flex-col justify-center items-center shadow-lg px-12' >
      <h1 className='text-2xl uppercase mb-6 '>Log in</h1>
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