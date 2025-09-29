import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <div className='my-20 px-20  z-20'>

        <div className='relative w-full z-10 py-20 bg-[url("/assets/Homepage/Cta/cta-bg.jpg")] bg-cover bg-center  flex flex-col justify-center items-center rounded-[35px]'>

        <div className='absolute inset-0 rounded-[35px] bg-gradient-to-r from-[#070022] to-[#0c0136] mix-blend-hard-light'></div>

            <div className='absolute top-22 blur-[6px] left-30 px-10 py-2 bg-white rounded-4xl text-black font-semibold text-[18px]'><span className='text-[#FF0000]'>PCB</span> DESIGN</div>
            <div className='absolute top-22 blur-[6px] right-30 px-10 py-2 bg-white rounded-4xl text-black font-semibold text-[18px]'><span className='text-[#FF0000]'>3D</span> PRINTING</div>
            <div className='absolute top-50  left-45 px-10 py-2 bg-white rounded-4xl text-black font-semibold text-[13px]'><span className='text-[#FF0000]'>PCB</span> DESIGN</div>
            <div className='absolute top-50  right-45 px-10 py-2 bg-white rounded-4xl text-black font-semibold text-[13px]'><span className='text-[#FF0000]'>3D</span> PRINTING</div>
            <div className='absolute bottom-18 scale-90 blur-[3px] left-30 px-10 py-2 bg-white rounded-4xl text-black font-semibold text-[15px]'>PCB DESIGN</div>
            <div className='absolute bottom-18 scale-90 blur-[3px] right-30 px-10 py-2 bg-white rounded-4xl text-black font-semibold text-[15px]'>PCB DESIGN</div>







<div className='w-full flex flex-col justify-center items-center z-20'>
        <h1 className='font-semibold text-[28px] mb-10'>Ready to bring your <span className='font-bold text-[#FF0000]'>ideas to life?</span></h1>
        <p className='text-center text-[13px] mb-5 w-[45%]'>Whether you’re designing your first prototype or preparing a production run, PEXDynamics gives you the tools, expertise, and support to make it happen. Upload your design today and let’s start building something extraordinary together.</p>
        <Image className='mb-10' src={"/assets/Homepage/Cta/facegroup.png"} alt='arrow' width={150} height={150}></Image>
        
        
        <div className='flex justify-center items-center w-full'>
<div className='flex'>

     <p className='underline underline-offset-6'>Get Started with Your Project !</p>
     <Image className='ml-3' src={"/assets/Homepage/Cta/arrow.svg"} alt='arrow' width={30} height={10}></Image>

</div>

</div>
           
        </div>

        </div>
      
    </div>
  )
}

export default Cta
