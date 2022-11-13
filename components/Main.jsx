import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className=' w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>the Possibilities are  endless</p>
          <h1>Hello Team SovTech, I'm Denwin, </h1>
          <h2>A final year  student at WeThinkCode  -  I would love to be part of your 2023 Graduate Program Cohort.</h2>
          <p>Over the years, I have acquired relevant skills and experience, which I shall bring to your organization.

I have also worked tirelessly on my communication abilities and teamwork skills, which I will put to use in my future career, which would be in your organization if I am selected for the position.

I have given my 100% effort in my past companies, and this has enabled me to recognize my capabilities and limitations.

If I channelize them further, they will bring fruitful results to me and also to your esteemed organization.</p>
          <div className='flex items-centre justify-between max-w-[330px] m-auto py-4'>
          <div className='rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"'>
            <FaLinkedinIn/>
          </div>

          <div className='rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"'>
            <FaGithub/>
          </div>

          <div className='rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"'>
            <AiOutlineMail/>
          </div>

          <div className='rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"'>
            <BsFillPersonLinesFill/>
          </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Main