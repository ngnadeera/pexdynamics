import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div className='mt-50 mb-50 max-sm:mt-20 max-sm:mb-20'>

        <div className='flex max-md:flex-col-reverse max-sm:flex-col-reverse justify-center items-center  max-sm:flex-col w-full px-40 max-2md:px-5 max-sm:px-5 gap-8 max-2md:gap-5 '>

            



        <div className='flex flex-col max-md:w-full  w-1/2 gap-8  pl-10 max-sm:pl-0'>
            <h1 className='text-[#1F1F1F] text-[30px] font-semibold max-sm:text-[20px]'>Behind every successful device lies a precise PCB at its core.</h1>
            <p className='text-[14px] font-medium text-[#8C8E8F] max-sm:text-[11px]'>At PEXDynamics, we offer professional PCB design solutions that help innovators and businesses bring electronics to life. From schematic capture to final board layouts, our experts ensure precision, reliability, and manufacturability at every step. Whether you need a prototype or a production-ready board, our PCB services make the process seamless and efficient.</p>
           
           
            <div className='flex items-center gap-3 text-[#212121] font-semibold w-fit px-5 py-2 shadow-xl/20 rounded-2xl'>
                
               <p className='text-[14px]'>Explore PCB Design</p>
               <Image src={"/assets/Homepage/Section1/play-dark.png"} alt='navigate' width={20} height={20}></Image>
                
                </div>
        </div>




        <div className='flex w-1/2 max-md:w-full  flex-col justify-center items-center px-10 max-sm:px-0 max-sm:gap-2 gap-5 max-sm:mb-10'>

                <div className='flex gap-5 max-sm:gap-2 w-full'>

                    <div className="flex items-end h-[32vh] max-sm:h-[27vh]  w-1/2 bg-[#171F2D] rounded-3xl text-white font-semibold text-[28px] ">
                        <div className='flex flex-col px-7 py-5 max-sm:text-[22px]'><span className='text-[#ED1F24] font-bold'>PCB</span> DESIGIN</div>
                    </div>

                     <div className="relative w-1/2 h-[32vh] max-sm:h-[27vh] z-10 bg-red-500 rounded-3xl bg-[url('/assets/Homepage/Section2/section2-img1.png')] bg-center bg-cover">
                        <div className='absolute inset-0 w-full h-full bg-[#0A234E] mix-blend-screen opacity-73 z-20 rounded-3xl'></div>
                    </div>

                </div>


                <div className="relative max-sm:h-[20vh] w-full bg-[url('/assets/Homepage/Section2/section2-img2.png')] bg-center bg-cover h-[23vh]  rounded-2xl">
                                            <div className='absolute inset-0 w-full h-full bg-[#0A234E] mix-blend-screen opacity-73 z-20 rounded-2xl'></div>
                </div>

        </div>

        </div>

        
      
    </div>
  )
}

export default Section2
