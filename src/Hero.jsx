import React, { useEffect, useRef, useState } from "react";
import { MapPin, ChevronRight } from "lucide-react";
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const xNorm = clientX / window.innerWidth - 0.5;
      const yNorm = clientY / window.innerHeight - 0.5;

      if (heroRef.current) {
        heroRef.current.style.transform = `
          perspective(1200px) 
          rotateY(${xNorm * 10}deg) 
          rotateX(${yNorm * -10}deg)
          translateX(${xNorm * 15}px)
          translateY(${yNorm * 15}px)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div
      ref={heroRef}
      className=" w-full px-16 h-screen flex flex-col justify-center items-center"
    >
      <div className=" flex justify-center items-center m-5 animate-fade-in">
        <span className=" w-10 h-[1px] bg-blue/80"></span>
        <span className=" flex uppercase text-blue/80 my-5 mx-5 font-black text-[8px] md:text-[14px] gap-4 tracking-[0.8em]">
          {" "}
          <MapPin size={14} className=" text-green-400/80" /> Kathmandu, Nepal
        </span>
        <span className=" w-10 h-[1px] bg-blue/80"></span>
      </div>

      <div className="tracking-tighter leading-[0.85] mb-8 flex flex-col items-center">
        <div className=" text-text uppercase text-[5rem] md:text-[8rem] font-black p-0">
          Rasil
        </div>
        <div className=" text-text uppercase text-[5rem] md:text-[8rem] font-black p-0 bg-clip-text text-transparent bg-gradient-to-r from-blue to-red">
          Thapa
        </div>
      </div>

      <span className=" text-text/50 m-2 uppercase font-black text-base tracking-[0.2rem] md:tracking-[0.3rem] lg:tracking-[0.6rem]">
        Backend-Focused Fullstack Developer
      </span>

      <button className=" relative m-15 flex justify-center items-center border text-text uppercase py-4 px-9 md:py-6 md:px-18 cursor-pointer bg-mist-900/60 border-blue/40 hover:border-blue/70 group">
        {/* macro div */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-blue/60 opacity-0 group-hover:opacity-100"></div>
        <div
          className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2
            
            border-blue/60 opacity-0 group-hover:opacity-100"
        ></div>
        {/* animated div */}
        <div className="absolute inset-0 w-0 group-hover:w-full bg-blue-400/[0.03] transition-all duration-700 ease-in-out"></div>
        <span className=" text-text/50 tracking-[0.5rem] mx-3 font-black text-[12px] group-hover:text-text/70">
          Contact Me
        </span>
        <ChevronRight
          size={15}
          className="relative text-text/50 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:text-blue"
        />
      </button>
    </div>
  );
}

export default Hero;
