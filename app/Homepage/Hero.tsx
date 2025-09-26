import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="mt-10 h-[95vh] bg-[url('/assets/Homepage/bg-image.png')] bg-cover bg-center">
      <div className='w-full  flex pt-45 px-35 gap-90'>
        <div className='w-1/2 flex flex-col '>
        <h1 className='text-[40px] text-white font-medium leading-13'>Bring Your Ideas To <br/> Life In <span className="font-['Inter'] font-bold text-[#ED1F24]">3D</span></h1>
        <p className='text-white/85 font-light text-[15px] py-5 pb-7'>From concept to final product, our industry-grade 3D printing ensures precision, speed, and professional quality.</p>
        <div className='flex justify-center align-center w-fit gap-4 text-[14px] bg-[#F5F4F4] rounded-2xl p-2 px-4 cursor-pointer'><p className="text-[#3F3F3F] font-['Inter'] font-semibold">Explore 3D Printing</p> <Image src={"assets/Homepage/Icons/navigate-play.svg"} alt='navigate' width={20} height={20}></Image> </div>
        </div>


        <div className='w-1/2 flex flex-col '>
        <h1 className='text-[40px] text-white font-medium leading-13'>Transform Circuits <br/> Into Real <span className="font-['Inter'] font-bold text-[#ED1F24]">PCB</span></h1>
        <p className='text-white/85 font-light text-[15px] py-5 pb-7'>Design, simulate, and manufacture PCBs with tools built for innovation and accuracy.</p>
        <div className='flex justify-center align-center w-fit gap-4 text-[14px] bg-[#F5F4F4] rounded-2xl p-2 px-4 cursor-pointer'><p className="text-[#3F3F3F] font-['Inter'] font-semibold">Explore PCB Design </p> <Image src={"assets/Homepage/Icons/navigate-play.svg"} alt='navigate' width={20} height={20}></Image></div>
        </div>

      </div>


      {/* Stats */}
      <div className='absolute bottom-0 w-full flex justify-center align-center '>
        <div className='w-1/4 border-t-2 border-r-2 border-[#131212] flex justify-center align-center py-7'>
        
        <div className='flex justify-center flex-col text-white/90'>
          <p className='text-[35px] font-semibold leading-10'>100+</p>
          <p className='text-[13px] font-semibold ml-1 text-white/80'>3D Designs</p>
        </div>
        
        </div>

        <div className=' w-1/4 border-t-2 border-r-2 border-[#131212] flex justify-center align-center py-7'>
         <div className='flex justify-center flex-col text-white/90'>
        <p className='text-[35px] font-semibold leading-10'>99%</p>
          <p className='text-[13px] font-semibold  text-white/80'>On-Time Delivery Rate</p>
        </div>
        </div>

        <div className=' w-1/4 border-t-2 border-r-2 border-[#131212] flex justify-center align-center py-7'>
        <div className='flex justify-center flex-col text-white/90'>
          <div className='flex items-baseline'><p className='text-[35px] font-semibold leading-9'>5+</p> <p className='text-[14px] ml-2 font-semibold'>YEARS</p></div>
          <p className='text-[13px] font-semibold text-white/80'>Industry Experience</p>
         </div>
        </div>

        <div className=' w-1/4 border-t-2  border-[#131212] flex justify-center align-center py-7'>
        
        <div className='flex justify-center flex-col text-white/90'>
        <p className='text-[35px] font-semibold leading-10'>200+</p>
          <p className='text-[13px] font-semibold  text-white/80'>PCB Prints</p>
        </div>
        
        </div>

      </div>
    </div>
  )
}

export default Hero
