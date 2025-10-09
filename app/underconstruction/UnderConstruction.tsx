import Image from 'next/image'
import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='h-screen '>

        <div className='h-screen w-full flex flex-col justify-center items-center pt-10'>

        <Image src="/assets/UnderConstruction/underconstruction.png" alt="Under Construction" width={400} height={400} className='mx-auto z-10 max-sm:p-2'/>

        <div className='flex flex-col justify-center items-center mt-4 z-20'>

        <h1 className='text-2xl font-bold text-center mt-4 text-[#2B2452] z-20 max-sm:text-2xl'>Page Under Construction</h1>
        <p className='text-center mt-2 text-[#2F3263] text-xs max-sm:px-5'>Check back soon to see what we’ve been building behind the scenes.</p>

        <p className='text-center mt-7 text-[12px] text-[#2f326395] max-sm:text-[10px]'>© 2025 PEXDynamics. All rights reserved.</p>

        </div>

        </div>
      
    </div>
  )
}

export default UnderConstruction
