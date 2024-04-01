import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header /> 
      <div className='absolute'>
        <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/5ad8d3c6-7d49-4b3d-bca5-a80f3a803e72/AU-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Netflix" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
        <><input type="text" placeholder="First Name" className='p-4 my-4 w-full bg-gray-700' /><input type="text" placeholder="Last Name" className='p-4 my-4 w-full bg-gray-700' /></>
      )}
        <input type="email" placeholder="Email Address or Phone Number" className='p-4 my-4 w-full bg-gray-700' />
        <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={handleSignIn}>
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}
        </p>
        <br />
        <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></small>
        </form>
    </div>
  )
}

export default Login