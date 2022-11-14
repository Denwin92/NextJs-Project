import React from "react";
import Image from 'next/image';


const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240] m-aumax-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <h2>About</h2>

          <p>The Fourth Industrial Revolution represents a fundamental change in the way we live, work and relate to one another. It is a new chapter in human development, enabled by extraordinary technology advances commensurate with those of the first, second and third industrial revolutions. </p>
          <p> <br /> </p>
          <div className="w-full h-auto m-auto shadow-l flex items-center justify-center p-4 hover:scale-105 ease-in duration-300" >
            {/* <img src='/../public/assets/1667576382959.jpeg' alt='/'/> */}
            <Image
          src="/assets/Denwin.jpeg"
          alt="/"
          width="300"
          height="300"
        />
          </div>
          <p>After losing my job as a travel consultant as a result of COVID-19, I knew I wanted to be a contributor to this AMAZING revolution. I started researching and came across Wethinkcode_. Wethinkcode_ offers a two year, tuition free, NQF level 5 qualification in systems development. I was fortunate enough to have been accepted to the program. In my time at here, I was exposed and learned various programming languages and frameworks.</p>
          <p><br /></p>
          <p>In my spare time I enjoy gardening, travelling and advancing my flutter and dart skills. I am also a "pawrent" to 2 feline furbabies ☺️</p>
          <p> <br /> </p>


          
        </div>
      </div>
    </div>
  );
};

export default About;
