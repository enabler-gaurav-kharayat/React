import React from 'react'

const Countries = (props) => {
  return (
    <div className='font-Inter font-medium leading-8 text-[18.75px] '>
      <button className='border w-[260px] h-[65px] rounded-md border-[#E7760D] mt-4'>{props.text}</button>
    </div>
  )
}

export default Countries
