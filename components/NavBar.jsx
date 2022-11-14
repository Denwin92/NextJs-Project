// import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div
        className="
        flex justify-between items-center w-full h-full px-2 2xl:px16">

          <Link href = '/#landing'>
            <Image
          src="/assets/NavLogo.png"
          width="125"
          height="50"
          alt="/"
        />
          </Link>
        
        <div>
          <ul className="hidden md:flex">
            <Link href="/#landing">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>

            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>

            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>

            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={!nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60] md: w-[45% md:w-[45%] h-screen bg-[#f5f5f5] p-10 ease-in duration-500]"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60] md: w-[45% md:w-[45%] h-screen bg-[#f5f5f5] p-10 ease-in duration-500]"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/NavLogo.png"
                width="87"
                height="35"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className=" w-[80%] md:w-[90%]">Your Potential. My Passion.</p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#landing">
                <li className=" py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className=" py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className=" py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#contact">
                <li className=" py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className=" uppercase tracking-widest">Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80]">
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

                {/* <div className=" rounded-full shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
