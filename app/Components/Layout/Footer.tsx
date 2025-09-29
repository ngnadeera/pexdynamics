import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    
    <div className='w-full  bg-white --bg-[url("/assets/Homepage/Footer/footer-bg.png")] bg-cover bg-center mt-30'>
                     <hr className=' border-t border-[#040a3c1f] w-full mt-10' />


        {/* <div className='absolute inset-0 w-full h-full bg-[#0729608e] mix-blend-hard-light opacity-60 z-10 '></div> */}

<div className='flex flex-col w-full bg-white z-30 mt-15 justify-start  items-start mb-15 px-50'>

    <Image className='mb-7' src={"/assets/logos/primary_logo.png"} alt='footer-top' width={130} height={130}></Image>
    <p className='text-[12px] mb-7 text-black/80 '>© 2025 PEXDynamics. All rights reserved. PEXDynamics is dedicated to empowering innovators, engineers, and businesses worldwide with professional 3D printing and PCB design solutions. From rapid prototyping to production-ready designs, we provide the tools, expertise, and support you need to turn ideas into reality.</p>




</div>

        <div className='z-20 flex flex-col items-center h-full justify-end pb-15'>
            <div className='w-full'>

            <div className='flex justify-between px-50'>

            <div className='flex z-20 gap-15 text-black text-[13px]'>
                <p>About us</p>
                <p>3D Printing</p>
                <p>PCB Design</p> 
                <p>Contact us</p>
            </div>

            <div className='flex z-20 gap-10'>
                <Image src={"/assets/Homepage/Footer/facebook.svg"} alt='logo' width={26} height={10}></Image>
                <Image src={"/assets/Homepage/Footer/whatsapp.svg"} alt='logo' width={25} height={12}></Image>
                <Image src={"assets/Homepage/Footer/youtube.svg"} alt='logo' width={35} height={20}></Image>

            </div>

            </div>

           

            </div>

             <hr className=' border-t border-black/50  w-[90%] mt-10' />

            <div className='flex w-full justify-between px-50 text-[13px] mt-10 text-black/90'>
                <div>
                <p>© 2025 PEXDynamics. All rights reserved.</p>
                </div>

                <div className='flex gap-15'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                
                </div>


                </div>

            <div></div>


        </div>
      
    </div>
  )
}

export default Footer
