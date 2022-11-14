import React from 'react'
import { AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id='landing' className=' w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>the Possibilities are  endless</p>
          <h1>Hello Team SovTech, I'm Denwin, </h1>
          <h2>A final year  student at WeThinkCode  -  I would love to be part of your 2023 Graduate Program Cohort.</h2>
          <p><br /></p>
          <p>I've worked hard to develop skills that are relevant to this industry and because this type of work brings me personal satisfaction. I've gained a lot of practical experience since starting at WeThinkCode_, as well as  become familiar with several coding languages, and frameworks, as well as assist in building projects outside of WeThinkCode_. I am so excited to begin a career as a software developer and learn more about this line of work from industry professionals.</p>
<p><br /></p>
<p>As a graduate in your program, I promise to deliver quality work throughout the tenure of the internship. I possess excellent communication skills, I’m a team player, and most importantly, I’m a dedicated worker. I would appreciate a chance to prove it to you.
</p>
          <div className='flex items-centre justify-between max-w-[330px] m-auto py-4'>
          <a
                    href='https://www.linkedin.com/in/denwin-solomons-24699835/'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  </a>


                  <a
                    href='https://github.com/Denwin92?tab=repositories'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  </a>

                  <a
                    href='mailto:Denwin.Solomons@gmail.com"'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  </a>

                  <a
                    href='https://wa.me/0662588794'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaWhatsapp/>
                  </div>
                  </a>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Main