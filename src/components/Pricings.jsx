import React, { useState } from 'react';
import Container from './Container'

const Pricings = () => {
  let handlelPlane = ()=>{
    window.alert("please payment")
  }
  return (
    <>
      <section className="py-20 bg-gray-100" id="pricing">
       <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Pricing Plans</h2>
          <p className="text-gray-600 mb-12">Choose a plan that fits your needs. Simple and transparent pricing.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div className="bg-white group rounded-2xl shadow p-8 border-2 border-[#0055ff3e] hover:shadow-xl transition-all ease-in-out hover:border-2 hover:border-blue-600 hover:bg-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600">Basic</h3>
              <p className="text-gray-500 mb-6 text-[12px] lg:text-[16px] group-hover:text-gray-950"><span className='font-semibold'>BASIC</span> 3 sections 1 Page in Tailwind CSS or Bootstrap With React js or Next js</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">$49</div>
              <ul className="text-left space-y-3 mb-6 text-gray-600 text-sm lg:text-xl">
                <li>✅ 1 Page Website</li>
                <li>✅ Responsive Design</li>
                <li>✅ Design customization</li>
                <li>✅ Source Code</li>
              </ul>
              <button onClick={handlelPlane} className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">Choose Plan</button>
            </div>

            <div className="bg-white group rounded-2xl shadow p-8 border-2 border-[#0055ff3e] hover:shadow-xl transition-all ease-in-out hover:border-2 hover:border-blue-600 hover:bg-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600">Standard</h3>
              <p className="text-gray-500 mb-6 text-[12px] lg:text-[16px] group-hover:text-gray-950"><span className='font-semibold'>Standard</span> 1 Page complete upto 8 sections in Tailwind CSS or Bootstrap With React js or Next js</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">$140</div>
              <ul className="text-left space-y-3 mb-6 text-gray-600 text-sm lg:text-xl">
                <li>✅ 1 Pages Website</li>
                <li>✅ Responsive Design</li>
                <li>✅ Design customization</li>
                <li>✅ Source Code</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">Choose Plan</button>
            </div>

           <div className="bg-white group rounded-2xl shadow p-8 border-2 border-[#0055ff3e] hover:shadow-xl transition-all ease-in-out hover:border-2 hover:border-blue-600 sm:col-span-2 sm:col-start-1 sm:mx-auto md:col-span-1 dm:col-start-auto hover:bg-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600">Premium</h3>
              <p className="text-gray-500 mb-6 text-[12px] lg:text-[16px] group-hover:text-gray-950"><span className='font-semibold'>Premium</span> 4 Page complete in Tailwind CSS or Bootstrap With React js or Next js</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">$320</div>
              <ul className="text-left space-y-3 mb-6 text-gray-600 text-sm lg:text-xl">
                <li>✅ Complete 4 Pages Website</li>
                <li>✅ Fully Responsive Design</li>
                <li>✅ Design customization</li>
                <li>✅ Source Code</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">Choose Plan</button>
            </div>
          </div>
        </div>
       </Container>
      </section>
   </>
  );
};

export default Pricings
