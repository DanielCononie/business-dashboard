import React from 'react'
import Link from 'next/link'
import { BiLogOutCircle } from "react-icons/bi"
import {AiOutlineUserAdd}from "react-icons/ai"
import {BsFileEarmarkSpreadsheetFill} from "react-icons/bs"
import {MdPersonSearch} from "react-icons/md"
import {FaHome} from "react-icons/fa"

const Sidebar = () => {
  return (
    <nav className='flex h-[100vh] flex-col justify-around bg-gray-700 p-3 text-white font-bold w-30'>
        <Link href='/' className='border-white border rounded-lg p-1 bg-white text-gray-700 flex flex-col items-center justify-center hover:bg-gray-700 hover:text-white hover:duration-1000 hover:ease-in-out'>
            <FaHome size={25}/>
        </Link>
        <Link href='/' className='border-white border flex flex-col justify-center items-center rounded-lg p-1 bg-white text-gray-700 hover:bg-gray-700 hover:text-white hover:duration-1000 hover:ease-in-out'>
            <BiLogOutCircle size={25} className='items-center text-center flex justify-center'/> 
            Logout
        </Link>
        <Link href='/addEmployee' className='border-white border flex flex-col justify-center items-center rounded-lg p-1 bg-white text-gray-700 hover:bg-gray-700 hover:text-white hover:duration-1000 hover:ease-in-out'>
            <AiOutlineUserAdd size={25} />
            Add
        </Link>
        <Link href='/addBusiness' className='border-white border flex flex-col justify-center items-center text-center rounded-lg p-1 bg-white text-gray-700 hover:bg-gray-700 hover:text-white hover:duration-1000 hover:ease-in-out'>
            <BsFileEarmarkSpreadsheetFill size={25}/> 
            New Data
        </Link>
        {/* <Link className='border-white border flex flex-col justify-center items-center rounded-lg p-1 bg-white text-gray-700 hover:bg-gray-700 hover:text-white hover:duration-1000 hover:ease-in-out' href='/viewEmployee'>
            <MdPersonSearch size={25}/>
            Search
        </Link> */}
    </nav>
  )
}

export default Sidebar