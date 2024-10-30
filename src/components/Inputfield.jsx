import React from 'react'

const Inputfield = (props) => {
  return (
    <div>
      <input className='w-[400px] h-14 font-poppins font-light text-base rounded' placeholder={props.text} />
    </div>
  )
}

export default Inputfield
