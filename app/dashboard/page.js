import React from 'react'
import Dashboard from '@/components/Dashboard'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        {/* <div >
          <Navbar />
        </div> */}
        <div>
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}



export default page