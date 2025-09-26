import React from 'react'

const IntroToPexd = () => {
  return (
    <div>

        <div className='w-full mt-20 mb-30'>

            <div className='flex px-35 gap-40'>

                <div className='flex flex-col w-1/2'> 
                
                <h1 className='text-[35px] text-[#001B4A] font-semibold'>WHAT IS PEXDYNAMICS ?</h1>

                <div className='py-2 px-8 mt-3 bg-[#001A47] rounded-2xl w-fit cursor-pointer font-normal text-[13px]'>Explore now</div> 
                
                </div>


                <div className='w-1/2 text-[#1C2A44]/80 font-medium'>PEXDynamics is a technology company that empowers innovators with professional tools and expert support for 3D printing and PCB design. From concept to production.</div>

            
            </div>

            <div className='flex w-full px-35 gap-10 mt-20 '>

                <div className="flex flex-col justify-between py-7 px-10 w-2/4 bg-[url('/assets/Homepage/IntroSection/intro-bg1.png')] bg-cover bg-center rounded-4xl h-[38vh]">
                <h1 className='text-[#001a47d3] text-[22px] font-bold'>Design Without Limits</h1>
                <p className='text-[#001a47ba] text-[13px] font-medium w-[65%]'>Access powerful 3D printing and PCB design tools that are built to handle everything from idea to reality.</p>
                </div>
                <div className='w-1/4 bg-[#171F2D] rounded-4xl'></div>
                <div className='w-1/4 bg-[#171F2D] rounded-4xl'></div>

            </div>

            
        </div>
      
    </div>
  )
}

export default IntroToPexd
