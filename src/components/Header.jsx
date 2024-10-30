import React from 'react'
import Logo from '../assets/image 1.svg'
const Header = () => {
  return (
    <div className='grid mt-6 grid-cols-[1fr_2fr] place-items-center h21'>
        <div className=''>
        <img src={Logo} className=''/>
      </div>
      <div className='grid grid-cols-3 list-none font-poppins text-base'>
      <li className='mt-4'>Find Service</li>
      <li className='mt-4'>Find Service Tags</li>
      <button className='border-2 border-solid border-[#00732F] w-48 h-12 '>Login / Sign Up</button>
      </div>
    </div>
  )
}

export default Header
