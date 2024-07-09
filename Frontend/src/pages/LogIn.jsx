import React from 'react';

const LogIn = () => {
  return (
    <div className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center'>
      <div className=' bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
        <p className='text-zinc-200 text-xl'>Log In</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="username" className='text-zinc-400'>Username</label>
            <input 
              type="text"
              id="username"
              className='w-full mt-2 bg-zinc-900 p-2 outline-none'
              placeholder='Username'
              name='username'
              required
            />
          </div>
        </div>
        <div className='mt-4'>
          <div>
            <label htmlFor="password" className='text-zinc-400'>Password</label>
            <input 
              type="password"
              id="password"
              className='w-full mt-2 bg-zinc-900 p-2 outline-none'
              placeholder='password'
              name='password'
              required
            />
          </div>
        </div>
        <div className='mt-4'>
          <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
            Log In
          </button>
        </div>
        <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>or</p>
        <div className='flex mt-4 items-center justify-center'>
          <p className='text-zinc-200'>Don't have an account? </p>
          <a href='/signup' className='text-blue-500 ml-2 hover:underline'>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
