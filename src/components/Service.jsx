import React from 'react'
import Container from './Container'

const Service = () => {
  return (
    <section id='service' className='bg-[#ffffff] py-16 md:py-20'>
      <Container>
        <div className='text-center'>
          <h4 className="text-[20px] md:text-[25px] font-bold font-syne text-[#180946] pb-1">Service</h4>
          <h2 className="text-[40px] md:text-[50px] font-bold font-syne text-[#085ea4] pb-6 md:pb-12">What I do</h2>
        </div>

       <div>
          <div className="pb-0 md:pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-open">
              <div className="p-5 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Responsive Web Design</h4>
                <p className="text-[#555] text-[16px]">Design clean, mobile-first websites that look great on all devices.</p>
              </div>

              <div className="p-5 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Frontend Development</h4>
                <p className="text-[#555] text-[16px]">Build interactive UIs with HTML, CSS, JavaScript, and React.js.</p>
              </div>

              <div className="p-5 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Tailwind & Bootstrap UI</h4>
                <p className="text-[#555] text-[16px]">Create fast and scalable UI using Tailwind CSS and Bootstrap.</p>
              </div>

              <div className="p-5 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Pixel-Perfect Design</h4>
                <p className="text-[#555] text-[16px]">Turn design mockups into high-fidelity, pixel-perfect interfaces.</p>
              </div>

              <div className="p-5 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">SPA Development</h4>
                <p className="text-[#555] text-[16px]">Develop smooth, fast single-page applications using React.js.</p>
              </div>

              <div className="p-5 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Dark Mode UI</h4>
                <p className="text-[#555] text-[16px]">Implement modern dark/light mode features for better UX.</p>
              </div>
            </div>
         </div>

       </div>
  
      </Container>

    </section>
  )
}

export default Service