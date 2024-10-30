import React from 'react'
import Countries from './Countries'

const HabotDescription = () => {
    return (
        <div className='flex justify-center mt-[100px] gap-[90px]'>
            <div className='font-poppins mt-4'>
                <p className=' font-bold text-4xl'>Ready to dive into HABOT?</p>
                <div className=' max-w-[620px] break-words whitespace-normal mt-9 '>
                    <p className='text-lg font-light'>Signing up with HABOT opens the door to a world of new opportunities
                        and potential for business growth. Gain access to a vibrant community
                        of like-minded individuals, unlock valuable resources, and take the
                        first step towards realizing your entrepreneurial dreams.</p>
                </div >
            </div>
            <div className='flex gap-x-4 gap-y-6'>
            <div className=''>
                <Countries text="Abu Dhabi"/>
                <Countries text="Sharjah & Ajman"/>
                <Countries text="Ras Al Khaimah" />

            </div>
            <div>
            <Countries text="Dubai"/>
                <Countries text="Fujairah"/>
                <Countries text="Umm Al Quwain"/>
            </div>
        </div>
        </div>
    )
}

export default HabotDescription
