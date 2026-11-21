import React from "react";

function About() {
  return (
    <div className=" w-full text-text flex flex-col">
      <div className=" flex flex-col justify-center items-center w-full px-16 py-5 leading-[0.8] bg-red/30">
        <div className=" w-full mb-5 animate-pulse">
          <div className=" flex items-center uppercase font-black">
            <div className=" w-[100px] h-[1px] bg-orange mr-4"></div>
            <span className=" tracking-[0.8rem] text-orange">Identity</span>
            <div className=" w-[100px] h-[1px] bg-orange mr-4"></div>
          </div>
        </div>

        <div className=" w-full flex flex-col">
          <span className=" font-black uppercase text-[3rem] md:text-[6rem]">
            Clean <br /> code.
          </span>
          <div className=" font-black uppercase text-[3rem] md:text-[6rem] text-blue/50 transition duration-300 ease-in-out hover:text-blue">
            Scalable
          </div>
          <span className=" font-black uppercase text-[3rem] md:text-[6rem]">
            System.
          </span>
        </div>
      </div>

      <div className=" w-full p-16 flex justify-center items-center font-black text-text/70 md:text-[1.5rem]">
        <p>
          I’m a self-taught, backend-focused full-stack developer who enjoys
          understanding how systems work behind the scenes. My primary focus is
          Python and Django, where I build REST APIs, design database schemas,
          implement authentication, and think about scalable and maintainable
          backend architecture. On the frontend, I use React and Tailwind CSS to
          build clean, functional user interfaces that integrate smoothly with
          backend services. I’m continuously improving my fundamentals in system
          design, databases, and real-world backend engineering.
        </p>
      </div>
    </div>
  );
}

export default About;
