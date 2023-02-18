import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import useTitle from '../../hooks/useTitle';


const Login = () => {
  const { user, setUser, handleGoogleSignIn, handleSignOut } = useFirebase();
 
  //changing title accordign to page
  useTitle('Log in - Volunteer Network')
  // const handleRedirect = () =>{
  //   handleGoogleSignIn()
  //   .then(result=>{
  //     setUser(result.user)
  //     navigate(redirect_uri)
  //   })
  // }
  return (
    <div className='min-h-[70vh] flex items-center '>

      <div className=' w-full form-control max-w-[570px] mx-auto  max-h-[570px] py-48 bg-[#F4F7FC] border flex flex-col justify-center items-center shadow-lg px-12' >
        {
          user?.email ? <p className='mb-8 text-2xl'>{user.email}</p> : <p className='text-2xl mb-8 uppercase'>Log in</p>
        }

        {
          user?.email ?
            <button className="btn  w-full rounded-3xl	" onClick={handleSignOut}>Log out</button>
            :
            <button className="btn  w-full rounded-3xl	" onClick={handleGoogleSignIn}>Log in with google</button>
        }
        <p className='mt-4 '>Don't have and account? <span className='text-blue-500 '>Create account</span></p>
      </div>
    </div>

  );
};

export default Login;