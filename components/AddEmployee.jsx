"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddEmployee = () => {

    const router = useRouter();
    const [employee, setEmployee] = useState({first_name: '',
    last_name: '',
    job_title: 'Front-end engineer', // Set a default value
    salary: 0, 
    })

    async function handleSubmit(event) {
        event.preventDefault();

        const res = await fetch('/api/employees', {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(employee)
        });

        const {msg} = await res.json()
        router.push('/dashboard');
    }
  return (
    <div className="w-1/2 mx-auto p-3">
        <h1 className='text-center text-white font-semibold text-[30px] mb-6'>Add an employee</h1>
        <form className='flex flex-col justify-center items-center' 
              onSubmit={handleSubmit}>
            <label htmlFor='first'
                   className='text-white mb-1 font-semibold'>
                First name
            </label>
            <input type="text" name='first' id='first'
                   onChange={(e) => {
                    setEmployee({...employee, first_name: e.target.value})
                   }} 
                   className='mb-6 w-3/4 max-w-[300px] border rounded-lg p-1 border-gray-800'
            />

            <label htmlFor='last'
                className='text-white mb-1 font-semibold'>
                Last name
            </label>
            <input type="text" name='last' id='last'
                   onChange={(e) => {
                    setEmployee({...employee, last_name: e.target.value})
                    }} 
                    className='mb-6 w-3/4 max-w-[300px] border rounded-lg p-1 border-gray-800'
            />

            <label 
                htmlFor='jtitle' 
                className='text-white mb-1 font-semibold'>
                Job title
            </label>
            <select value={employee.jtitle}
                    onChange={(e) => {
                        setEmployee({...employee, job_title: e.target.value})
                    }} 
                    id='jobTitle'
                    className='mb-6 w-3/4 max-w-[300px] border rounded-lg p-1 border-gray-800'>
                <option value="Front-end engineer">Front-end engineer</option>
                <option value="Back-end engineer">Back-end engineer</option>
                <option value="Project manager">Project manager</option>
                <option value="Dev Ops">Dev ops</option>
            </select>

            <label 
                htmlFor='salary'
                className='text-white mb-1 font-semibold'>
                Salary
            </label>
            <input type="number" name='salary' id='salary' 
                   onChange={(e) => {
                    setEmployee({...employee, salary: e.target.value})
                }}
                className='mb-6 w-3/4 max-w-[300px] border rounded-lg p-1 border-gray-800' />

            <button type='submit'
                    className='text-white font-bold mt-7 text-xl border border-white p-3 rounded-xl hover:bg-white hover:text-gray-800'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default AddEmployee