"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const LoginForm = () => {

  const [error, setError] = useState()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if either username or password is empty
    if (!username || !password) {
      setError('Please enter both a username and a password.');
    } else {
      setError('');
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <form className='flex flex-col justify-center items-center'
            onSubmit={handleSubmit}>
        <label htmlFor='username' className='text-white mb-2'>
          Username
        </label>
        <input className='w-3/4 p-1 border-black border-solid rounded-md focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5' 
                type='text' 
                id='username'  
                name='username' 
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor='password' className='text-white mb-2'>
          Password
        </label>
        <input className='p-1 w-3/4 border-black border-solid rounded-md focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                type='password' 
                id='password'  
                name='password' 
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}/>
          <button className='mt-5 bg-gray-800 text-white font-bold hover:font-extrabold'
                  type='submit'>
            Log in!
          </button>
          <div className='flex text-white mt-5'>
            <p>Don't have an account?</p>
            <Link href='/createAccount' className='ml-11 font-bold hover:font-extrabold'>
              Register
            </Link>
          </div>
          {error && (
            <span id='error' className='text-red-500 mt-2'>
              {error}
            </span>
          )}

      </form>
    </div>
  )
}

export default LoginForm