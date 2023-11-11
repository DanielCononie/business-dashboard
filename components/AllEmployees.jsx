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

            setEmployees(data)

        }
        getEmployees();
    }, [])

    async function deleteEmployee(id) {
      const res = await fetch('/api/employees/getEmployees', {
        method: "DELETE",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
          id
        })
    });
    const data = await res.json()
    const {msg} = data;
    
    if(msg == 'Data deleted') {
      setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.empid !== id)
      );
    }}

  return (
    <div className=''>
        <h1 className='text-center font-bold text-lg'>Project Team</h1>
      <ul className='list-none '> 
        {employees.map((employee, index) => (
          <li key={index} className='flex justify-between border-b py-3 '>
            <p className='font-bold w-[160px]' > {employee.first_name} {employee.last_name}</p>
            <div className='flex flex-col justify-center items-center text-center'>
              <p className={`font-sans ${
                          employee.job_title === 'Dev Ops'
                          ? 'bg-yellow-500 w-40 items-center text-center ml-4 flex-shrink-0'
                          : employee.job_title === 'Project manager'
                          ? 'bg-green-500 w-40 items-center text-center ml-4 flex-shrink-0'
                          : employee.job_title === 'Front-end engineer'
                          ? 'bg-red-500 w-40 items-center text-center ml-4'
                          : employee.job_title === 'Back-end engineer'
                          ? 'bg-blue-500 w-40 items-center text-center ml-4'
                          : 'bg-gray-500 w-40 items-center text-center ml-4' 
                      } text-white py-1 px-2 rounded-full`}>
                  {employee.job_title}
              </p>
            </div>
            <p className='w-40 text-center'>${employee.salary}</p>
            <button className='hover:bg-gray-700 hover:text-white p-2 rounded-lg bg-white text-gray-700 hover:duration-1000 hover:ease-in-out'>Edit</button>
            <button className='hover:bg-gray-700 hover:text-white p-2 rounded-lg bg-white text-gray-700 hover:duration-1000 hover:ease-in-out' 
                    onClick={() => deleteEmployee(employee.empid)}>Delete</button>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllEmployees