import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import AllEmployees from './AllEmployees'


const Dashboard = () => {
  return (
    <div className='bg-gray-300 w-full h-[100vh] flex flex-col'>
      <div className='flex p-10 justify-between'>
        <div className='p-6 bg-white rounded-xl border-gray-700 border-4 border-ridge max-w-[500px]  h-[400px]'>
          <LineChart />
        </div>
        <div className='p-6 bg-white rounded-xl border-gray-700 border-4 border-ridge ml-6 max-w-[500px] h-[400px]'>
          <PieChart />
        </div>
      </div>
      <div className='p-5 m-5 overflow-scroll bg-white rounded-lg'>
        <AllEmployees />
      </div>
    </div>
  )
}

export default Dashboard