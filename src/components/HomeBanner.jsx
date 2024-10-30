import React from 'react'
import Image from '../assets/Rectangle 1.png'


import Inputfield from './Inputfield'
import HabotDescription from './HabotDescription'
const HomeBanner = () => {
  return (
    <div>
      <div className="bg-cover bg-no-repeat bg-center w-screen h-[600px] mt-6" style={{ backgroundImage: `url(${Image})` }}>
        <div className='grid place-items-center h-64 font-poppins font-bold text-white leading-[66px] text-[55px] '>
          <p className='text-center '>Are You a Supplier?
            Explore Matching Opportunities.</p>
        </div>
        <div className='flex gap-2 justify-center' >
          <Inputfield text="Search your required service here" />
          <Inputfield text="Search your desired location here" />
          <div >
            <button className=' w-[117.94px] h-14 rounded-md bg-[#00732F] text-white font-bold text-base leading-6 font-Inter' >Search</button></div>
        </div>
        <div className='text-white font-poppins text-center mt-8'>
          <p >Are you a buyer? <u>Click here if you are looking to post a requirements</u></p>
        </div>
      </div>
      <HabotDescription />
    </div>
  )
}

export default HomeBanner
