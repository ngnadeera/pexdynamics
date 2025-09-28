import React from 'react'   
import Image from 'next/image'

const Process = () => {
  return (
    <div>

        <div className='w-full mt-20 px-40 py-5 max-md:px-10 max-sm:pt-30 max-sm:px-5'> 
            
            <h1 className='text-[#001A47] text-[27px] font-semibold max-sm:text-[18px]'>Your Idea to Reality</h1>
            <p className='text-black/90 text-[14px] pt-1 pl-1  max-sm:text-[10px]'>From upload to delivery, bringing your designs to life is simple.</p>
            
        </div>


        <div className='w-full   flex justify-center align-center mt-10'>


<div className='relative'>
            <Image className="" src={"/assets/Homepage/Process/process.png"} height={1080} width={1080} alt='process' />
            <Image className='absolute top-0 mt-[9.5%] ml-[51.8%] max-sm:w-[13] max-sm:mt-[8.9%] max-sm:ml-[51.3%]' src={"/assets/Homepage/Process/check.png"} height={25} width={25} alt='process' ></Image>
            <Image className='absolute top-0 mt-[28.2%] ml-[14.5%] max-sm:w-[13] max-sm:mt-[28%] max-sm:ml-[14.2%]' src={"/assets/Homepage/Process/cloud-computing.png"} height={27} width={27} alt='process' ></Image>
            <Image  className='absolute right-0 top-0 mt-[15.3%] mr-[11.2%] max-sm:w-[13] max-sm:mr-[10.8%]' src={"/assets/Homepage/Process/fast-delivery.png"} height={29} width={29} alt='process' ></Image>


            <div className='absolute top-10 max-md:top-0'>
              
                
                      <Image  className='absolute right-0 mr-[10%] -mt-[8%] max-md:w-[150] max-md:mr-28 max-sm:w-[80] max-sm:mr-39' src={"/assets/Homepage/Process/1.png"} height={200} width={200} alt='process' ></Image>

                      <div className='mt-[30%] max-md:mt-[25%] max-md:ml-[5%] max-sm:mt-[10%]'>
                <h1 className='text-[18px] text-black font-semibold max-sm:text-[12px]'> Upload Your Design </h1>
                <p className='text-[13px] text-[#8C8E8F] w-[90%] mt-2 max-md:text-[10px] max-sm:text-[8px] max-sm:w-[60%]'>Start by uploading your 3D model or PCB files in the supported formats.</p>

                </div>

                
   

            </div>



            <div className='absolute top-0 right-0 -mt-[8%] -mr-[10%] max-2md:mr-[0]'>
              
                
                      <Image  className='absolute right-0 mr-[20%] -mt-[7%]' src={"/assets/Homepage/Process/3.png"} height={200} width={200} alt='process' ></Image>

                      <div className='mt-[25%] ml-[25%]'>
                <h1 className='text-[18px] text-black font-semibold '> Build & Deliver </h1>
                <p className='text-[13px] text-[#8C8E8F] w-[80%] mt-2'>Your project is produced with industry-grade quality and delivered right to your doorstep.</p>

                </div>

                
   

            </div>



            <div className='absolute top-0 right-0 mt-[23%] mr-[20%]'>
              
                
                      <Image  className='absolute right-0 mr-[20%] -mt-[7%]' src={"/assets/Homepage/Process/2.png"} height={200} width={200} alt='process' ></Image>

                      <div className='mt-[25%] ml-[25%]'>
                <h1 className='text-[18px] text-black font-semibold '> Review & Confirmation </h1>
                <p className='text-[13px] text-[#8C8E8F] w-[80%] mt-2'>Our team reviews your submission, ensures it meets requirements, and confirms the details with you.</p>

                </div>

                
   

            </div>

</div>

            


        </div>
      
    </div>
  )
}

export default Process
