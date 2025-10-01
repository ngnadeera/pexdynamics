import React from 'react'

const Whatsapp = () => {
  return (
   <div className="fixed bottom-7 right-10 z-50 max-sm:bottom-15">
  <a
    href="https://wa.me/+94789477961" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-xl/40 shadow-green-500/50  hover:scale-120 transition-transform  duration-300 ease-in-out "
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-9 h-9"
    />
  </a>
</div>

  )
}

export default Whatsapp
