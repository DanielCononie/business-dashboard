"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const CreateForm = () => {

    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState()

    async function handleSubmit(event) {
        event.preventDefault();

        if (!username || !password || !confirm) {
            setError('Please enter all fields');
        } 
        else if(password !== confirm) {
            setError("Passwords do not match")
        }
        else {
            setError('');
            const res = await fetch('/api/accounts', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password,
                    confirm
                }),
            });

            const { msg } = await res.json()
            console.log(msg)

            if(msg == 'That username already exists') {
                setError(msg)
            }

            else if(msg == 'Account created successfully posted!'){
                router.push('/dashboard')
            }
            
            
        }}

  return (
    <div className="w-1/2 mx-auto p-3">
        <h1 className='text-center text-white font-semibold text-[30px] mb-6'>Create an account</h1>
       <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <label className='text-white mb-1 font-semibold'>Username</label>
        <input className=' w-3/4 max-w-[300px] border rounded-lg p-1 border-gray-800'
               type='text'  
               placeholder='username...'
               onChange={(e) => setUsername(e.target.value)}/>
        <label className='text-white mt-6 mb-1 font-semibold'>Password</label>
        <input className='mb-6 w-3/4 max-w-[300px] border rounded-lg p-1 border-gray-800'
               type='password'  
               placeholder='password...'
               onChange={(e) => setPassword(e.target.value)}/>
        <label className='text-white mb-1 font-semibold'>Confirm Password</label>
        <input className='w-3/4 border max-w-[300px] rounded-lg p-1 border-gray-800' 
               type='password' 
               placeholder='confirm password...'
               onChange={(e) => setConfirm(e.target.value)}/>
        <button type='submit' className='text-white font-bold mt-7 text-xl border border-white p-3 rounded-xl hover:bg-white hover:text-gray-800'>Create Account</button>
       </form>
       <div className='flex justify-evenly mt-8 text-white'>
        <p>Already have an account?</p>
        <Link href='/' className='font-bold'>Log in</Link>
       </div>
       {error && (
            <span id='error' className='text-red-500  text-center font-bold'>
              <p className='items-center mt-5'>{error}</p>
            </span>
        )}
    </div>
  )
}

export default CreateForm