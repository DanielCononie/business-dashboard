"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';

const BusinessDataForm = () => {
    
  const router = useRouter()
  const [businessData, setBusinessData] = useState({});
  const [error, setError] = useState("")

  async function handleSubmit(e){
     e.preventDefault();
     if(!businessData.quarter || !businessData.revenue || !businessData.new_hires){
        setError('Please enter all fields');
        return;
     } else {
        const res = await fetch('/api/businessForm', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(businessData)
        })
        const {msg} = await res.json()
        console.log(msg)

        if(msg == "Information for this quarter is already entered!") {
            setError(msg)
        }

        else if(msg == 'Success'){
            router.push('/dashboard')
        }
     } // end else
  } // end function
  return (
    <div className="w-1/2 mx-auto p-3">
         <h1 className='text-center text-white font-semibold text-[30px] mb-6'>Business Data</h1>
        <form className='flex flex-col justify-center items-center'
              onSubmit={handleSubmit}>
            <label className='text-white mb-1 font-semibold' 
                   htmlFor='quarter'>
                    Quarter
            </label>
            <input className='w-3/4 border max-w-[300px] rounded-lg p-1 border-gray-800'
                    type='number' id='quarter' name='quarter' onChange={(e) => {
                setBusinessData({...businessData, quarter: e.target.value})
            }}/>
            <label className='text-white mb-1 font-semibold'
                   htmlFor='revenue'>
                    Revenue
            </label>
            <input  className='w-3/4 border max-w-[300px] rounded-lg p-1 border-gray-800'
                    type='number' id='revenue' name='revenue' onChange={(e) => {
                setBusinessData({...businessData, revenue: e.target.value})
            }}/>
            <label className='text-white mb-1 font-semibold'
                   htmlFor='revenue'># of new hires</label>
            <input  className='w-3/4 border max-w-[300px] rounded-lg p-1 border-gray-800'
                    type='number' id='new_hires' name='newHires' onChange={(e) => {
                setBusinessData({...businessData, new_hires: e.target.value})
            }}/>
            <button className='text-white font-bold mt-7 text-xl border border-white p-3 rounded-xl hover:bg-white hover:text-gray-800' type='submit'>
                Add data
            </button>
        </form>
        {error && (
            <span id='error' className='text-red-500  text-center font-bold'>
              <p className='items-center mt-5'>{error}</p>
            </span>
        )}
    </div>
  )
}

export default BusinessDataForm