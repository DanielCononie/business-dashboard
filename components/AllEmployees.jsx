"use client";
import React, {useState, useEffect} from 'react'

const AllEmployees = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        async function getEmployees() {
            const res = await fetch('/api/employees/getEmployees', {
                method: "GET",
                headers: {
                    "Content-type":"application/json"
                },
            })
            const data = await res.json()
            console.log(data)

            setEmployees(data)

        }
        getEmployees();
    }, [])

  return (
    <div className=''>
        <h1 className='text-center font-bold text-lg'>All Employees</h1>
      <ul className='list-none'> 
        {employees.map((employee, index) => (
          <li key={index} className='flex justify-between border-b py-2'>
            <p> {employee.first_name} {employee.last_name}</p>
            <p className={`${
                        employee.job_title === 'Dev Ops'
                        ? 'bg-blue-500 w-40 items-center text-center flex-shrink-0'
                        : employee.job_title === 'Project manager'
                        ? 'bg-yellow-500 w-40 items-center text-center ml-4'
                        : employee.job_title === 'Front-end engineer'
                        ? 'bg-red-500 w-40 items-center text-center ml-4'
                        : employee.job_title === 'Back-end engineer'
                        ? 'bg-gray-500 w-40'
                        : 'bg-gray-500' // Default color for other job titles
                    } text-white py-1 px-2 rounded-full`}>
                {employee.job_title}
            </p>
            <p className='w-40'>${employee.salary}</p>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllEmployees