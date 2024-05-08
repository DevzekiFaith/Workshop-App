import React from 'react'
import { NavLink } from "react-router-dom"
import HeroImage from "/Group 1.png"
import Circle001 from "/Group 153.png"
import Circle002 from "/Group 143.png"
import Circle003 from "/Group 154.png"
import Circle004 from "/Group 153 (1).png"
import Circle005 from "/Group 143 (1).png"



const Method = () => {

  const activeLink = "bg-pink-500 text-white"
  const normalLink = ""
  return (
    <div className="">
      <div className='bg-white xl:p-0'>

        {/* THIS IS THE HEADER MAIN SECTION 1 */}

        <header className='main'>

          <div className='relative'>
            <img className='shadow-4xl w-[100%] xl:ml-0' src={HeroImage} placeholder="Blur" alt="Hero Image" />
            <div className='absolute xl:top-[7rem] xl:left-[32rem] left-0 top-0 md:left-[12rem] md:top-[3rem] xl:ml-[-1rem] ml-[2.4rem] sm:ml-[8rem] sm:mt-[1.4rem]'>
              <h1 className='text-white xl:font-extrabold xl:text-3xl xl:mb-[1.5rem] text-center mt-[1rem] font-bold md:text-[1.5rem] '>The Method of  WorkshopApp </h1>
              <p className='text-white text-xs w-[380px] xl:w-[500px] xl:text-sm text-center  '>Below is a step by step representation of the hiring process of WorkshopApp</p>
            </div>
          </div>

          <div className='p-[4rem] relative' content-1 >
            <h1 className='font-bold text-lg content-wrap3 '>Overview</h1>
            <p className='mt-[1rem]'>We are a virtual studio that only aims at hiring only the best qualified people, hence to achieve this process,
              candidates are made to go through a series of task with already set requirements, this is done in order to test
              as well as bring out the best. Only qualified candidates gets hired.
              The steps include:</p>
          </div>
        </header>


        {/* // MAIN SECTION STARTS FROM HERE */}

        <main>
          <section>
            <div className='bg-[#F5F5F5] h-[6rem] p-[2rem] content'>
              <h1 className='font-bold ml-[2rem] text-lg content-wrap2 '>Selection Process</h1>
            </div>
            <div>
              <div className='p-[1rem]'>
                <h5 className='ml-[3rem]'>There are three various steps in this stage, and they are as follow:</h5>
              </div>
              <div>
                <div className=' flex justify-between items-center p-[4rem] xl:flex-row flex-col gap-[2rem]'>
                  <div className='bg-slate-900 rounded-full w-[1.5rem] xl:block hidden'>
                    <h1 className='text-center text-black'>01</h1>
                  </div>
                  {/* <NavLink className={({isActive}) => isActive ? activeLink : normalLink}> */}
                  <div className='p-[4rem] bg-slate-900 hover:bg-orange-500 hover:cursor-pointer'>
                    <h2 className='text-white text-center font-extrabold text-lg mb-[.6rem] shadow-2xl'>The Hiring Process</h2>
                    <p className='w-[20rem] text-white text-center'>Applicants are hired in their numbers as long
                      as their application is before the deadline of
                      the company.
                    </p>
                  </div>
                  {/* </NavLink> */}



                  {/* // THE CIRCLE PREDICTION CHART 01 */}


                  <div>
                    <img className='animate-spin ' src={Circle001} alt="circle chart" />
                  </div>
                </div>

                {/* // THE CIRCLE PREDICTION CHART 02 */}

                <div className=' flex justify-between items-center p-[4rem] xl:flex-row flex-col gap-[2rem]'>
                  <div className='bg-slate-900 rounded-full w-[1.5rem] relative xl:block hidden'>
                    <h1 className='text-center text-black'>02</h1>

                    {/* <span className='absolute top-[-1rem] left-[.7rem]'>&#x2758;</span> */}
                    <hr className='w-[.1rem] bg-slate-500 h-[23rem] absolute top-[-23rem] ml-[.7rem]' />

                  </div>

                  <div className='p-[4rem] bg-slate-900  hover:bg-orange-500 hover:cursor-pointer'>
                    <h2 className='text-white text-center font-extrabold text-lg mb-[.6rem] shadow-2xl'>The Test Process</h2>
                    <p className='w-[20rem] text-white text-center'>Applicants are then put through a number of test
                      through competitions.This process is done to first
                      reduce the number of candidates as well as
                      challenge them into bringing out the best in them.
                    </p>
                  </div>
                  {/* // THE CIRCLE PREDICTION CHART 02 */}
                  <div>
                    <img className='animate-spin ' src={Circle002} alt="circle chart" />
                  </div>
                </div>


                {/* // THE CIRCLE PREDICTION CHART 03 */}

                <div className=' flex justify-between items-center p-[4rem] xl:flex-row flex-col gap-[2rem]'>
                  <div className='bg-slate-900 rounded-full w-[1.5rem] relative xl:block hidden'>
                    <h1 className='text-center text-black'>02</h1>

                    {/* <span className='absolute top-[-1rem] left-[.7rem]'>&#x2758;</span> */}
                    <hr className='w-[.1rem] bg-slate-500 h-[24rem] absolute top-[-24rem] ml-[.7rem]' />

                  </div>
                  <div className='p-[4rem] bg-slate-900  hover:bg-orange-500 hover:cursor-pointer'>
                    <h2 className='text-white text-center font-extrabold text-lg mb-[.6rem] shadow-2xl'>The Elimination Process</h2>
                    <p className='w-[20rem] text-white text-center'>Applicants who don't meet up to the task
                      requirements / deadlines, get eliminated.
                      This process continues until we are left
                      with our desired number / the “Best”.
                    </p>
                  </div>
                  {/* // THE CIRCLE PREDICTION CHART 01 */}
                  <div>
                    <img className='animate-spin ' src={Circle003} alt="circle chart" />
                  </div>
                </div>
              </div>
            </div>

            {/* // WHAT HAPPENS AFTER SELECTION PAGE */}

            <div className='bg-[#F5F5F5] h-[6rem] p-[2rem] content-2 '>
              <h1 className='font-bold ml-[2rem] text-lg content-wrap4'>Selection Process</h1>
            </div>
            <div>
              <div className='p-[2rem] ml-[2rem]'>
                <h2>There are two various steps in this stage, and they are as follow:</h2>
              </div>
              <div>
                <div className=' flex justify-between items-center p-[4rem] xl:flex-row flex-col gap-[2rem]'>
                  <div className='bg-slate-900 rounded-full w-[1.5rem] xl:block hidden'>
                    <h1 className='text-center text-black'>01</h1>
                  </div>
                  <div className='p-[4rem] bg-slate-900  hover:bg-orange-500 hover:cursor-pointer'>
                    <h2 className='text-white text-center font-extrabold text-lg mb-[.6rem] shadow-2xl'>The Victorious</h2>
                    <p className='w-[20rem] text-white text-center'>Applicants who have emerges victorious are then
                      merged into teams of competent individuals.
                    </p>
                  </div>
                  {/* // THE CIRCLE PREDICTION CHART 04 */}
                  <div>
                    <img className='animate-spin ' src={Circle004} alt="circle chart" />
                  </div>
                </div>
              </div>

              {/* // LAST CIRCLE FOR THE CIRCULAR CHART 05 */}

              <div className=' flex justify-between items-center p-[4rem] xl:flex-row flex-col gap-[2rem]'>
                <div className='bg-slate-900 rounded-full w-[1.5rem] relative xl:block hidden'>
                  <h1 className='text-center text-black'>02</h1>

                  {/* <span className='absolute top-[-1rem] left-[.7rem]'>&#x2758;</span> */}
                  <hr className='w-[.1rem] bg-slate-500 h-[22.2rem] absolute top-[-22.1rem] ml-[.7rem]' />

                </div>
                <div className='p-[4rem] bg-slate-900  hover:bg-orange-500 hover:cursor-pointer'>
                  <h2 className='text-white text-center font-extrabold text-lg mb-[.6rem] shadow-2xl'>The Team Work</h2>
                  <p className='w-[20rem] text-white text-center'>Once merged into tams, the team are then
                    assigned projects to work on as well recieve
                    guidiance into turning such project into reality.
                  </p>
                </div>
                {/* // THE CIRCLE PREDICTION CHART 05 */}
                <div>
                  <img className='animate-spin ' src={Circle005} alt="circle chart" />
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  )
}

export default Method
