import React from "react";
import Image from "next/image";
import { AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link";

const Contact = () => {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/skills/clipart1610152.png"
                  width="300"
                  height="300"
                  alt="/"
                />
              </div>

              <div>
                <h2 className="py-2">Denwin Solomons</h2>
                <p>Software Developer</p>
                <p>I am available for both Freelance and Full-time Positions. Let's chat
☺️ .</p>
              </div>
              <div>
                <p className="uppercase pt-8">connect with me</p>
                <div className="flex items-center justify-between py-4">
                  
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

            <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                <div className="p-4">

                <form
                action='https://getform.io/f/b7531237-5e43-452d-84c8-7accfe1bf870'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>

                </div>
            </div>
 
        </div>

        <div className="flex justify-center py-12">

            <Link href='/'>
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp/>
                </div>

            </Link>

        </div>
      </div>
    </div>
  );
};

export default Contact;
