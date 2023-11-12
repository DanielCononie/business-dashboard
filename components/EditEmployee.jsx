"use client";
import React, { useState } from 'react'

const EditEmployee = ({employee, setEdit}) => {

  const [updatedEmp, setUpdatedEmp] = useState({
    id: employee.empid,
    first_name: employee.first_name,
    last_name: employee.last_name,
    job_title: employee.job_title,
    salary: employee.salary
  })

  async function handleSubmit() {
    const updateData = await fetch("/api/employees", {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedEmp)
    })

    const { msg } = await updateData.json();

    if(msg === 'Put success') {
      setEdit(null)
    }

    else {
      window.alert("Data could not be saved")
    }
    
    
  }

  return (
    <div>
      <form className='flex justify-evenly'>
        <div className=' flex flex-col'>
          <input type="text" className='border border-blue-700 lg:mr-[130px] md:mr-[80px] sm:mr-[50px] p-1 rounded-lg mb-1' placeholder='First Name' value={updatedEmp.first_name} onChange={(e) => setUpdatedEmp({...updatedEmp, first_name: e.target.value})}/>
          <input type="text" className='border border-blue-700 lg:mr-[130px] md:mr-[80px] sm:mr-[50px] p-1 rounded-lg ' placeholder='Last Name' value={updatedEmp.last_name} onChange={(e) => setUpdatedEmp({...updatedEmp, last_name: e.target.value})}/>
        </div>
        <select name="job" id="job" placeholder='Job' className='border border-blue-700 lg:mr-[130px] md:mr-[100px] sm:mr-[50px] p-1 rounded-lg' value={updatedEmp.job_title} onChange={(e) => setUpdatedEmp({...updatedEmp, job_title: e.target.value})}>
          <option value="Front-end engineer">Front-end engineer</option>
          <option value="Back-end engineer">Back-end engineer</option>
          <option value="Project manager">Project manager</option>
          <option value="Dev Ops">Dev Ops</option>
        </select>
        <input type="number" className='border border-blue-700 lg:mr-[75px] md:mr-[80px] sm:mr-[50px] p-1 rounded-lg' placeholder='Salary' value={updatedEmp.salary} onChange={(e) => setUpdatedEmp({...updatedEmp, salary: e.target.value})}/>
        <button className='hover:bg-gray-700 hover:text-white p-2 rounded-lg bg-white text-gray-700 hover:duration-1000 hover:ease-in-out lg:mr-[85px] md:mr-[80px] sm:mr-[50px]'
                onClick={handleSubmit}>
          Save
        </button>
        <button className='hover:bg-gray-700 hover:text-white p-2 rounded-lg bg-white text-gray-700 hover:duration-1000 hover:ease-in-out lg:ml-[20px]'
                onClick={() => setEdit(null)}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditEmployee