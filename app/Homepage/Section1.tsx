import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className='mt-50 mb-50 max-sm:mt-40 max-sm:mb-10'>

        <div className='flex justify-center max-md:flex-col items-center  max-sm:flex-col w-full px-40 max-2md:px-5 max-sm:px-2 gap-10 max-2md:gap-5 '>

            <div className='flex w-1/2 max-md:w-full flex-col justify-center items-center px-10 max-sm:px-2 gap-5 max-sm:gap-2 max-md:mb-10'>

                <div className='flex gap-5 max-sm:gap-2 w-full'>

                    <div className="flex items-end h-[32vh] max-sm:h-[27vh]  w-1/2 bg-[#171F2D] rounded-3xl text-white font-semibold text-[28px] max-sm:text-[22px]">
                        <div className='flex flex-col px-7 py-5'><span className='text-[#ED1F24] font-bold'>3D</span> PRINTING</div>
                    </div>

                     <div
                     style={{ backgroundImage: "url(assets/Homepage/Section1/section1-img1.png)" }}
                     className="relative w-1/2 h-[32vh] max-sm:h-[27vh] z-10 bg-red-500 rounded-3xl  bg-center bg-cover">
                        <div className='absolute inset-0 w-full h-full bg-[#0A234E] mix-blend-screen opacity-73 z-20 rounded-3xl'></div>
                    </div>

                </div>


                <div
                style={{ backgroundImage: "url(assets/Homepage/Section1/section1-img2.png)" }}
                className="relative w-full bg-center bg-cover h-[23vh] max-sm:h-[20vh] rounded-2xl">
                                            <div className='absolute inset-0 w-full h-full bg-[#0A234E] mix-blend-screen opacity-73 z-20 rounded-2xl'></div>
                </div>

        </div>



        <div className='flex flex-col w-1/2 max-md:w-full max-md:px-10 gap-8 max-sm:px-4'>
            <h1 className='text-[#1F1F1F] text-[30px] font-semibold max-sm:text-[20px]'>Never Doubt That Innovative Ideas Combined With the Right Tools Can Shape The Future.</h1>
            <p className='text-[14px] font-medium text-[#8C8E8F] max-sm:text-[11px]'>At PEXDynamics, we provide industry-grade 3D printing solutions that empower creators, engineers, and businesses to turn their ideas into reality. From rapid prototyping to final production, we deliver precision, speed, and creativity. Our mission is to make 3D printing accessible, reliable, and professional, helping you build the products of tomorrow, today.</p>
           
           
            <div className='flex items-center gap-3 text-[#212121] font-semibold w-fit px-5 py-2 shadow-xl/20 rounded-2xl'>
                
               <p className='text-[14px]'>Explore 3D Printing</p>
               <Image src={"assets/Homepage/Section1/play-dark.png"} alt='navigate' width={20} height={20}></Image>
                
                </div>
        </div>

        </div>

        
      
    </div>
  )
}

export default Section1
