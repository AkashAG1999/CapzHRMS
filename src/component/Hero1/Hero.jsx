import React from 'react'
import { useState } from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const [state] = useState(false)
  return (

        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                <header>
                    <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                       
                    </div>
                    <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                           
                            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                               
                                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                   
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <section>
                    <div className="max-w-screen-2xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <a href="javascript:void(0)" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
                                
                                <p className='flex items-center'>
                                One Stop Solution for Human Resource
                                   
                                </p>
                            </a>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                            HRMS Software <span>India</span>
                            </h1>
                            <h2>
              <span className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
              <Typewriter options={{strings: ['Mobile App', 'Web App'],autoStart: true,loop: true,}}/>
              </span>
            </h2>
                            <p>
                            No matter the size of your business, our HRMS software in India is suitable in addressing your human resource management processes for smooth operation. Integrated with software like Time Attendance, Payroll, Leave, Claims and Appraisal.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Get started
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href={"/"} className="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1">
                                                Learn more
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg></a>
                            </div>
                            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Find us on</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                  <i class="fa-brands fa-github"></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>

            </div>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            {/* Replace with your image */}
                            <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg" className="max-w-xl" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
  
}

export default Hero



    
