import React from 'react'

const IntroToPexd = () => {
  return (
    <div>

        <div className='w-full mt-20 mb-30 max-sm:mb-10'>

            <div className='flex max-sm:flex-col px-35 gap-40 max-2md:px-20 max-2md:gap-20 max-md:px-10 max-md:gap-10 '>

                <div className='flex flex-col w-1/2 max-sm:w-full'> 
                
                <h1 className='text-[35px] text-[#001B4A] font-semibold max-md:text-[25px] max-sm:text-[20px]'>WHAT IS PEXDYNAMICS ?</h1>

                <div className='py-2 px-8 mt-3 max-sm:mt-2 bg-[#001A47] rounded-2xl w-fit cursor-pointer font-normal text-[13px] max-sm:text-[11px]'>Explore now</div> 
                
                </div>


                <div className='w-1/2 text-[#1c2a44cd] text-[15px] font-medium  pt-2 max-sm:pt-0 max-sm:w-full max-sm:text-[12px]'>PEXDynamics is a technology company that empowers innovators with professional tools and expert support for 3D printing and PCB design. From concept to production.</div>

            
            </div>

            <div className='flex max-sm:flex-col w-full px-35 max-sm:px-2 gap-7 mt-20 max-sm:mt-10 max-2md:px-15 max-2md:gap-3 max-md:px-5 max-md:gap-2'>

                <div 
                style={{ backgroundImage: "url(assets/Homepage/IntroSection/intro-bg1.png)" }}
                
                className="flex flex-col justify-between py-7 px-10 w-2/4 max-sm:w-full  bg-cover bg-center rounded-4xl h-[38vh] max-sm:h-[30vh]">
                <h1 className='text-[#001a47d3] text-[22px] font-semibold max-sm:text-[20px] max-sm:text-[18px]'>Design Without Limits</h1>
                <p className='text-[#001a47ba] text-[13px] font-medium w-[65%] max-sm:w-full'>Access powerful 3D printing and PCB design tools that are built to handle everything from idea to reality.</p>
                </div>


                <div className='w-1/4  max-sm:w-full max-sm:gap-5 bg-[#171F2D] rounded-4xl flex flex-col justify-between py-7 px-5 pl-7 max-sm:pl-10'>

                <h1 className='text-white text-[22px] max-sm:text-[18px]'>Expert Guidance at Every Step</h1>
                <p className='text-white/80 text-[12px]'>Work with industry professionals who provide the knowledge, strategies, and support you need to succeed in your design journey.</p>
                
                </div>

                <div className='w-1/4 max-sm:w-full max-sm:gap-5 bg-[#171F2D] rounded-4xl flex flex-col justify-between py-7 px-5 pl-7 max-sm:pl-10'>

                <h1 className='text-white text-[22px] max-sm:text-[18px]'>100% Reliable, Professional Results</h1>
                <p className='text-white/80 text-[12px]'>Count on precision, speed, and industry-grade quality that ensures your final product meets the highest professional standards.</p>
                
                </div>

            </div>

            
        </div>
      
    </div>
  )
}

export default IntroToPexd
