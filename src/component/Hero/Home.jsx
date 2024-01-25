import React from "react"
import "./Home.css"
import hero from "../../assets/hero4.svg"
import Typewriter from 'typewriter-effect';
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='hero' id='home'>
        
        <div className='container f_flex top' >
          <div className='left top'>
            <h3>One Stop Solution for Human Resource</h3>
            <h1>
            HRMS Software <span>India</span>
            </h1>
            <h2>
              <span>
              <Typewriter options={{strings: ['Mobile App', 'Web App'],autoStart: true,loop: true,}}/>
              </span>
            </h2>
            
            <p>No matter the size of your business, our HRMS software in India is suitable in addressing your human resource management processes for smooth operation. Integrated with software like Time Attendance, Payroll, Leave, Claims and Appraisal.</p>
            <div className="space-x-4">
           
            <button onClick={()=> {navigate ("/Login")}} className="mt-4 text-white  bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get Started </button> 
           
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
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
