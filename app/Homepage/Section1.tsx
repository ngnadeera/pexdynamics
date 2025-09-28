import React from 'react'

const Section1 = () => {
  return (
    <div className='mt-50 mb-50'>

        <div className='flex justify-center items-center  max-sm:flex-col w-full px-40 max-sm:px-10 gap-10 '>

            <div className='flex w-1/2 flex-col justify-center items-center px-10 gap-5'>

                <div className='flex gap-5 w-full'>

                    <div className="flex items-end h-[32vh]  w-1/2 bg-[#171F2D] rounded-3xl text-white font-semibold text-[28px] ">
                        <div className='flex flex-col px-7 py-5'><span className='text-[#ED1F24] font-bold'>3D</span> PRINTING</div>
                    </div>

                     <div className="relative w-1/2 h-[32vh] z-10 bg-red-500 rounded-3xl bg-[url('/assets/Homepage/Section1/section1-img1.png')] bg-center bg-cover">
                        <div className='absolute inset-0 w-full h-full bg-[#0A234E] mix-blend-screen opacity-73 z-20 rounded-3xl'></div>
                    </div>

                </div>


                <div className="relative w-full bg-[url('/assets/Homepage/Section1/section1-img2.png')] bg-center bg-cover h-[23vh]  rounded-2xl">
                                            <div className='absolute inset-0 w-full h-full bg-[#0A234E] mix-blend-screen opacity-73 z-20 rounded-2xl'></div>
                </div>

        </div>



        <div className='flex flex-col w-1/2 gap-8'>
            <h1 className='text-[#1F1F1F] text-[30px] font-semibold'>Never Doubt That Innovative Ideas Combined With the Right Tools Can Shape The Future.</h1>
            <p className='text-[14px] font-medium text-[#8C8E8F]'>At PEXDynamics, we provide industry-grade 3D printing solutions that empower creators, engineers, and businesses to turn their ideas into reality. From rapid prototyping to final production, we deliver precision, speed, and creativity. Our mission is to make 3D printing accessible, reliable, and professional, helping you build the products of tomorrow, today.</p>
            <div className=' drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]'>Explore 3D Printing</div>
        </div>

        </div>

        
      
    </div>
  )
}

export default Section1
